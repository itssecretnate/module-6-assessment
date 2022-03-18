const {shuffleArray} = require('./utils')

describe('shuffleArray should shuffle and return an array', () => {
    
    const testArr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffleArray(testArr);
    
    // shuffleArray returns an array.
    test("shuffleArray returns an array.", () => {
        expect(typeof shuffledArr).toBe("object");
    })

    // Returned array is the same length as the arguent sent.
    test("Returned array is the same length as arguent", () => {
        expect(shuffledArr.length).toEqual(testArr.length);
    })

    // // Check that all items are in the array.
    test("Arrays contain the same items", () => {
        expect(arraysHaveSameObject(testArr, shuffledArr)).toEqual(true);
    })

    // Check the items have been shuffled.
    test("Array has been shuffled.", () => {
        expect(arrHasBeenShuffled(testArr, shuffledArr)).toEqual(true);
    })
    
})

function arrHasBeenShuffled(arr1, arr2) {
    if(arr1.length != arr2.length) return "Arrays do not match.";
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] != arr2[i]) return true;
  }
  return false;
}

function arraysHaveSameObject(arr1, arr2) {
    if(arr1.length != arr2.length) return "Arrays do not match.";

    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) break;
            if(arr1[i] != arr2[j] && j === (arr2.length - 1)) return false;
        }
    }
    return true;
}