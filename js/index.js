const n1 = [[2, 4, 7, 4], [3, 3, 2, 8], [5, 6, 3, 0]];
const n2 = [[1, 1, 1, 4], [2, -3, 1, 2], [1, 2, -1, -1]];
const n3 = [[1, 1, 2, -1], [1, 3, -6, 7], [2, -1, 2, 0]];
const n4 = [[4, -4, -2, 0], [0, 0, 0, 0], [-2, 2, -6, 0]];

const hello = arr => {
    let a = [...arr];
    let l = arr[0].length;
    let o = a.length;
    for (let i = 0; i < o; i++) {
        a = a.slice(0, i).concat(a.slice(i, o).sort((a, b) => b[i] - a[i]));
        if (a[i][i] != 1) {
            let d = a[i][i];
            for (let j = 0; j < l; j++) { a[i][j] = (d == 0 ? 0 : a[i][j] / d); }
        }
        for (let j = i + 1; j < o; j++) {
            let m = a[i][i] == 0 ? 0 : (-a[j][i]) / a[i][i];
            for (let k = 0; k < l; k++) { a[j][k] += m * a[i][k]; }
        }
    }
    for (let i = o - 2; i >= 0; i--) {
        for (let j = l - 1; j >= 0; j--) {
            if (j != l - 1 && a[i][j] == 1) break;
            if (j != l - 1) {
                let m = a[i][i] == 0 ? 0 : (-a[i][j]) / a[i][i];
                for (let k = 0; k < l; k++) { a[i][k] += m * a[j][k]; }
            }
        }
    }
    return a;
}

const r = hello(n2);
console.log(r);