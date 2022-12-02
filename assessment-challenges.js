const addToZero = (numsArray) => {
    for(let i = 0; i < numsArray.length; i++) {
        for(let j = 0; j < numsArray.length; j++) {
            if(numsArray[i] + numsArray[j] === 0 && i !== j){
                return true
            } 
        }
    }
    return false
}
// runtime = O(n^2)
// space = O(1)



console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True


const hasUniqueChars = (string) => {
    for( let i = 0; i < string.length; i++) {
        for(let j = 0; j < string.length; j++) {
            if(string[i] === string[j] && i !== j){
                return false
            }
        }
    }
    return true
}

// runtime = O(n^2)
// space = O(1)


console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False


const isPangram = (string) => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    string = string.toLowerCase() 

    for (let i = 0; i < alphabet.length; i++) {
        if(string.indexOf(alphabet[i]) < 0){
          return false;
        }
      }
      return true;
    }

    // runtime = O(n)
    // space = O(1)


console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

const findLongestWord = (array) => {
    let max = 0
    for(let i = 0; i < array.length; i++) {
        if(array[i].length > max) {
            max = array[i].length
        }
    }
    return max
}

// runtime = O(n)
// space = O(1)

console.log(findLongestWord(["hi", "hello"]));
// -> 5