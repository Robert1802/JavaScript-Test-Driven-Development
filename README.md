# Javascript - TDD

This projects is a study of TDD.
We have a simple application of TDD using:
- Chai
- MochaJs
- Node.js
- Express

## How To Run

To run this project on your machine you will need to run the command:
```
npm install --save-dev mocha chai
npm install --save express
npm install --save-dev supertest
npm install --save-dev regenerator-runtime
npm install --save-dev chai-exclude
npm install --save-dev sinon
npm install mongodb
npm install lodash
npm install --save-dev @babel/core @babel/preset-env @babel/register
npx mocha "src/**/*/*.test.js" --recursive --require @babel/register
npm run test

```

## Connection to MongoDB
Set your URI connection string as a parameter on the "test-helpers.js" file on the line 3.
Make sure you replace the <username> and <password> placeholders with your own credentials.

```
export const URI="mongodb+srv://<username>:<password>@cluster0.eqzcvej.mongodb.net/collection?retryWrites=true&w=majority";
```

## Test Results

```
  getUserByUsername
    ✔ get the correct user from the database given a username (849ms)
    ✔ returns null when the user is not found (479ms)

  GET /users/:username
    ✔ sends the correct response when a user with the username is found
    ✔ sends the correct response when there is an error
    ✔ returns the appropriate response when the user is not found

  isAnagram - basic functionality
{ e: 1, i: 1, l: 1, n: 1, s: 1, t: 1 }
{ e: 1, i: 1, l: 1, n: 1, s: 1, t: 1 }
    ✔ returns true when two known anagrams are passed in
{ b: 1, e: 1, l: 1, o: 1, s: 1, w: 1 }
{ b: 1, e: 1, l: 1, o: 1, w: 1 }
{ b: 1, e: 1, l: 1, o: 1, w: 1 }
{ b: 1, e: 1, l: 1, o: 1, s: 1, w: 1 }
    ✔ returns false when either of the strings has extra letters
{ e: 1, i: 1, l: 1, n: 1, s: 2, t: 1 }
{ e: 1, i: 1, l: 1, n: 1, s: 1, t: 1 }
    ✔ returns false when the strings have the same letters in different quantities
{ a: 1, c: 1, e: 1, i: 1, n: 2, o: 2, r: 1, s: 1, t: 1, v: 1 }
{ a: 1, c: 1, e: 1, i: 1, n: 2, o: 2, r: 1, s: 1, t: 1, v: 1 }
    ✔ return true with two anagrams with space on words
{ a: 1, e: 1, s: 1, t: 2 }
{ a: 1, e: 1, s: 1, t: 2 }
    ✔ return true with two anagrams if one is Upper case and the other is not

  getLetterCount - basic functionality
{}
    ✔ returns an empty object when passed an empty string
{ c: 1, a: 1, t: 1 }
    ✔ return the correct letter count for a word with only one of each letter
{ m: 1, i: 4, s: 4, p: 2 }
    ✔ return the correct letter count for words with more than one of certain letters


  13 passing (2s)

```
```
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |    56.84 |     100 |     100 | 
 Integration-Test |     100 |    55.91 |     100 |     100 | 
  db.js           |     100 |    48.14 |     100 |     100 | 2-6
  mocha-setup.js  |     100 |      100 |     100 |     100 | 
  server.js       |     100 |    51.72 |     100 |     100 | 2
  test-helpers.js |     100 |    62.85 |     100 |     100 | 2,20
 Unit-Test        |     100 |      100 |     100 |     100 | 
  anagrams.js     |     100 |      100 |     100 |     100 | 
  letter-count.js |     100 |      100 |     100 |     100 | 
------------------|---------|----------|---------|---------|-------------------
```