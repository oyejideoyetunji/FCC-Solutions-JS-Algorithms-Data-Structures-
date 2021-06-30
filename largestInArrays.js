function largestOfFour(arr) {
    let max = Number.NEGATIVE_INFINITY
    const maxArr = []
    let i = 0, j = 0;
    for (; i < arr.length && j < arr[i].length;) {
        if (max < arr[i][j]) {
            max = arr[i][j]
        }
        j++;
        if (j === arr[i].length) {
            maxArr.push(max)
            max = Number.NEGATIVE_INFINITY
            i++;
            j = 0;
        }
    }
    return maxArr
}

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))