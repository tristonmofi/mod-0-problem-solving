//Start with an array of strings with a mix of uppercase and lowercase letters.
//Print every word in all lowercase letters.

var words = ["LoVe", "peACe", "GrAtiTudE", "PoSiTivIty"]

var lowercaseWords = words.map(word => word.toLowerCase());

console.log(lowercaseWords);