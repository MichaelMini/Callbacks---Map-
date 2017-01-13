var words = ["ground", "control", "to", "major", "tom"];

var countLetters = function(word) {
	return word.length;
};

var map = function(arr, cb) {
	var i = 0;
	var wordsLength = [];
	while (i < arr.length) {
	    wordsLength.push(cb(arr[i]));
	    i++;
	}
	return wordsLength;
};

console.log(map(words, countLetters));



// [6, 7, 2, 5, 3]