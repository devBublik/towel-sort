// You should implement your task here.
module.exports = function towelSort(matrix) {
 	let res=[];
	if (!matrix  || matrix.length===0) {
		return [];
	}
	for (let i=0; i<matrix.length; i++) {
		for (let j=0; j<matrix[0].length; j++){
			let columnIndex = i % 2===0 ? j: (matrix[i].length-j-1);
		res.push((matrix[i][columnIndex]));
		}
	}
	return res;
}