// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//my solution
function chunk(array, size) {
    // we want to take the array and break it into chunks each chunk size equals size of subarray
    // we probably want to take the array we have and find the index
    // take size +1 so we can get proper index to slice on
    let chunksArr = [];
    let index = 0
    
    while(index < array.length) {
        chunksArr.push(array.slice(index, index + size))
        index += size
    }
    return chunksArr
}

//his solution
/*
function chunk(array, size){
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1]

        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element);
        }
    }
    return chunked
}
 */

module.exports = chunk;
