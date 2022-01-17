const matrix = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5]
];
function  compareMatrix () {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let array = matrix[i];
        for (let k = 1; k < array.length - 3; k++) {
            if (matrix[i][k] <= 9) {
                result += ' true';
            }
            else {
                result += ' false';
            }

        }
    }
    document.querySelector('.out').innerHTML = result;
}
document.querySelector('.button').onclick = compareMatrix;
