// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// third solution
// uses reduce
// uses ES6 syntax
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

// second solution
// for loop
// more likely to be asked in interview since more complex
// function reverse(str) {
//     let reversed = "";

//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed
// }

// first solution (my solution)
// function reverse(str) {
    //     return str.split('').reverse().join('')
    // }