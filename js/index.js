const n1 = [[2, 4, 7, 4], [3, 3, 2, 8], [5, 6, 3, 0]];
const n2 = [[1, 1, 1, 4], [2, -3, 1, 2], [1, 2, -1, -1]];
const n3 = [[1, 1, 2, -1], [1, 3, -6, 7], [2, -1, 2, 0]];

const hello = arr => {
    console.log("original array:");
    console.log(arr);
    let arrAug = [...arr];
    // iterate throug columns
    for (let i = 0; i < arr.length; i++) {
        console.log("column " + i);
        console.log(arrAug);
        let untouchedArr = arrAug.slice(i, arrAug.length);
        untouchedArr.sort((a, b) => { return b[i] - a[i] });
        console.log("untouched array");
        console.log(untouchedArr);
        let sliced = arrAug.slice(0, i);
        console.log("sliced array");
        console.log(sliced);
        arrAug = sliced.concat(untouchedArr);
        console.log("sorted arr: ");
        console.log(arrAug);
        // create the leading 1
        let d = 1;
        if (arrAug[i][i] !== 1) {
            d = arrAug[i][i];
            for (let j = 0; j < arrAug[i].length; j++) {
                arrAug[i][j] = arrAug[i][j] / d;
            }
        }
        console.log("create leading one by dividing by " + d);
        console.log(arrAug);
        console.log("creating zeroes under leading 1.");
        // make everything under the leading 1 a zero.
        for (let j = i + 1; j < arrAug.length; j++) {
            let pZero = arrAug[j][i];
            let multiple = (-pZero) / arrAug[i][i];
            console.log("found multiple " + multiple + " for row " + arrAug[j] + " #" + j);
            for (let k = 0; k < arr[j].length; k++) {
                console.log("adding " + (multiple * arr[i][k]) + " to " + arrAug[j][k])
                arrAug[j][k] += (multiple * arrAug[i][k]);

            }
            console.log("created zero under 1:");
            console.log(arrAug);
        }
    }

    console.log(arrAug);
    for (let i = arrAug.length - 2; i >= 0; i--) {
        for (let j = arrAug[i].length - 1; j >= 0; j--) {
            if (arrAug[i][j] == 1) {
                break;
            }
            if (j != arrAug[i].length - 1) {
                console.log("looking at value: ");
                console.log(arrAug[i][j]);
                let pZero = arrAug[i][j];
                let multiple = (-pZero) / arrAug[i][i];
                console.log("found multiple " + multiple + " for row " + arrAug[j] + " #" + j);
                for (let k = 0; k < arr[j].length; k++) {
                    console.log("adding " + (multiple * arrAug[j][k]) + " to " + arrAug[i][k])
                    arrAug[i][k] += (multiple * arrAug[j][k]);

                }
                console.log("created zero under 1:");
                console.log(arrAug);
            }
        }
    }

    return arrAug;

}

const r = hello(n1);
console.log(r);