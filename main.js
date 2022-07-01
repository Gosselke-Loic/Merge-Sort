//output input to see the result
let output = document.getElementById("outputArr");

//example array 
let array = [32, 35, -1, 90, -3, 6, 60, 12, -10, 300, 1, -45];

/**
 * split array in two array and send arrays to next step
 * @param {Array} array 
 * @returns  From recursivity, splitted into two arrays (left and right) and send data to next step
 */
function MergeSort(array) {

    if(array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length/2);

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return Merge(
        MergeSort(left), MergeSort(right)
    );
}

/**
 * compare value from the two array and concat the results into a new sorted array
 * @param {Array} left index 0 to middle array from the array of input 
 * @param {*} right from the middle of the array to the last index, from the array of input 
 * @returns The orginal array sorted
 */
function Merge(left, right) {
    let sortArray = [];
    i = 0;
    j = 0;

    while (i <= left.length-1 && j <= right.length-1) {

        if (left[i] < right[j]) {
            sortArray.push(left[i]);
            i++;
        } else {
            sortArray.push(right[j]);
            j++
        }
    }

    return output.innerHTML = sortArray 
                                .concat(left.slice(i))
                                .concat(right.slice(j));
}

MergeSort(array);