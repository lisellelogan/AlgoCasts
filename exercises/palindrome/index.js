// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//alt solution using .every() => not ideal solution
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

module.exports = palindrome;

//his solution using .reverse()
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

//my solution
// function palindrome(str) {
//     const reversedString = str.split('').reduce((rev, char) => char + rev, '');
//     return reversedString === str;
// }