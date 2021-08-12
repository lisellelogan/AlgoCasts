// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// second solution
// for loop
// more likely to be asked in interview since more complex
function reverse(str) {
    let reversed = "";
    
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed
}    

module.exports = reverse;

// // third solution
// // uses reduce
// // uses ES6 syntax
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, "");
// }

// first solution (my solution)
// function reverse(str) {
    //     return str.split('').reverse().join('')
    // }