//Given an array of strings, return only the words that begin with the letter "t"

//Goal: 
// - Create an array of strings
// - Create a function with a parameter
// - Make another variable and set it's value as `[]` to represent a new blank array
// - Begin to iterate through the original array looking for words that start with 't' with an `if` statement
// - The `startsWith()` method is calling on the parameter. The loop will find words that start with 't'
// - If the return value of the `if` statement is true push the data to the new array with `.push()` method
// - Set the `return` value as your new array
// - Print to the console the function name and the argument

var words = ["super", "tasteful", "guitar", "truck", "time", "plant"]

function returnTWords(arr) {

    var newArr = [];

    for (var i = 0; i < words.length; i++) {
        if (arr[i].startsWith('t') === true){
            newArr.push(arr[i]);
        }
    }
    return newArr
}

console.log(returnTWords(words));