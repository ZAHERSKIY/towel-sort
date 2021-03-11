// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];
    return matrix.reduce((prev, cur, index) => {
        if (index % 2 !== 0) {
            cur.reverse();
        }
        return prev.concat(cur);
    }, []);
};

console.log(
    module.exports([
        [1, 2, 3, 4],
        [8, 7, 6, 5],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ])
);
