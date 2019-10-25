const n1 = [[2, 4, 7, 4], [3, 3, 2, 8], [5, 6, 3, 0]];
const n2 = [[1, 1, 1, 4], [2, -3, 1, 2], [1, 2, -1, -1]];
const n3 = [[1, 1, 2, -1], [1, 3, -6, 7], [2, -1, 2, 0]];
const n4 = [[4, -4, -2, 0], [0, 0, 0, 0], [-2, 2, -6, 0]];

const hello = arr => {
    let arrAug = [...arr];
    // iterate throug columns
    for (let i = 0; i < arr.length; i++) {
        let untouchedArr = arrAug.slice(i, arrAug.length);
        untouchedArr.sort((a, b) => { return b[i] - a[i] });
        let sliced = arrAug.slice(0, i);
        arrAug = sliced.concat(untouchedArr);
        // create the leading 1
        let d = 1;
        if (arrAug[i][i] !== 1) {
            d = arrAug[i][i];
            for (let j = 0; j < arrAug[i].length; j++) {
                arrAug[i][j] = (d == 0 ? 0 : arrAug[i][j] / d);
            }
        }
        // make everything under the leading 1 a zero.
        for (let j = i + 1; j < arrAug.length; j++) {
            let pZero = arrAug[j][i];
            let multiple = arrAug[i][i] == 0 ? 0 : (-pZero) / arrAug[i][i];
            for (let k = 0; k < arr[j].length; k++) {
                arrAug[j][k] += (multiple * arrAug[i][k]);

            }
        }
    }
    for (let i = arrAug.length - 2; i >= 0; i--) {
        for (let j = arrAug[i].length - 1; j >= 0; j--) {
            if (j != arrAug[i].length - 1 && arrAug[i][j] == 1) {
                break;
            }
            if (j != arrAug[i].length - 1) {
                let pZero = arrAug[i][j];
                let multiple = arrAug[i][i] == 0 ? 0 : (-pZero) / arrAug[i][i];
                for (let k = 0; k < arr[j].length; k++) {
                    arrAug[i][k] += (multiple * arrAug[j][k]);
                }
            }
        }
    }
    return arrAug;
}

const r = hello(n2);
console.log(r);