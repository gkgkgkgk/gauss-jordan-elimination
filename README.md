# gauss-jordan-elimination

### Assignment: code a Gauss Jordan Elimination function. 

Pseudo Code: 
```
var a = [m][n] // a is an m by n matrix
var r = hello(a);
function hello (a) {
    return array;
}
```

#### First Working Function
Byte count is sitting at 886 byte. There are still roundoff errors but edge cases seem to be covered.

#### Code Breakdown

Define function, array length and augmented array:
```
const hello = arr => {
    let a = [...arr];
    let l = arr[0].length;
    let o = a.length;
```
Iterate through every column in the matrix:
```
    for (let i = 0; i < o; i++) {
```
Sort every row that does not have a leading 1 by the largest number in current column:
```
        a = a.slice(0, i).concat(a.slice(i, o).sort((a, b) => b[i] - a[i]));
```
if the row does not contain a leading one, divide everything in the row by the number in the column that needs a leading one:
```
        if (a[i][i] != 1) {
            let d = a[i][i];
            for (let j = 0; j < l; j++) { a[i][j] = (d == 0 ? 0 : a[i][j] / d); }
        }
```
Find a multiple for every other row to make the numbers under the leading one into zeroes by adding the rows:
```
        for (let j = i + 1; j < o; j++) {
            let m = a[i][i] == 0 ? 0 : (-a[j][i]) / a[i][i];
            for (let k = 0; k < l; k++) { a[j][k] += m * a[i][k]; }
        }
    }
```
Iterate from the bottom up starting from the right most column to find multiple for the remaining numbers that need to be zeroes:
```
    for (let i = o - 2; i >= 0; i--) {
        for (let j = l - 1; j >= 0; j--) {
            if (j != l - 1 && a[i][j] == 1) break;
            if (j != l - 1) {
                let m = a[i][i] == 0 ? 0 : (-a[i][j]) / a[i][i];
                for (let k = 0; k < l; k++) { a[i][k] += m * a[j][k]; }
            }
        }
    }
```
Return the augmented array:
```
    return a;
}
```


### Example inputs and outputs:

input:
```
[[2, 4, 7, 4], [3, 3, 2, 8], [5, 6, 3, 0]]
```
output:
```
[ [ 1, 0, 0, 12.000000000000005 ],
  [ 0, 1, 0, -12.000000000000007 ],
  [ 0, 0, 1, 4.000000000000003 ] ]
```

input:
```
[[1, 3, 2, 2], [2, 7, 7, -1], [2, 5, 2, 7]]
```
output:
```
[ [ 1, 0, 0, 3 ], [ -0, 1, 0, 1 ], [ 0, 0, 1, -2 ] ]
```