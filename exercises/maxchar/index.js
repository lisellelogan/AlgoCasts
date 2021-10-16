// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//notes

//my solution
function maxChar(str) {
    let chars = {};
    // declaring helper variables
    let maxChar = ""
    let maxValue = 0

    for (let char of str) {
        chars[char] = chars[char] ++ || 1;
    }

    for (let char in chars) {
        if (chars[char] > maxValue) {
            maxValue = chars[char];
            maxChar = char;
        }
    }
    return maxChar
}
module.exports = maxChar;
