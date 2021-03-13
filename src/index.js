// You should implement your task here.
let arr = [];
module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return []
    }
    const result = [];
    for (let i = 0; i < matrix.length; i++) {
        i % 2 === 0 ? result.push(matrix[i]) : result.push(matrix[i].reverse())
    }
    return result.flat()
}