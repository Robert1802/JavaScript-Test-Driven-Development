import { getLetterCount } from "./letter-count";
import { isEqual } from "lodash";

export const isAnagram = (stringOne, stringTwo) => {
    
    stringOne = stringOne.replace(/\s/g, '')
    stringTwo = stringTwo.replace(/\s/g, '')

    let stringOneSorted = getLetterCount(stringOne.split('').sort().join('').toLowerCase())
    let stringTwoSorted = getLetterCount(stringTwo.split('').sort().join('').toLowerCase())

    let jsonOne = JSON.stringify(stringOneSorted)
    let jsonTwo = JSON.stringify(stringTwoSorted)

    let anagramResult = (jsonOne === jsonTwo)

    return anagramResult;
}

// Course solution - dont cover last 2 tests
// export const isAnagram = (string1, string2) => {
//     const string1LetterCount = getLetterCount(string1)
//     const string2LetterCount = getLetterCount(string2)

//     return isEqual(string1LetterCount, string2LetterCount)
// }