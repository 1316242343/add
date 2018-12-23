var arr = [21,52,33,62,22,93,35,57,354,24];
var compare = function (x, y) {
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }
}
console.log(arr.sort(compare));
var compare1 = function (x, y) {
    if (x < y) {
        return 1;
    } else if (x > y) {
        return -1;
    } else {
        return 0;
    }
}
console.log(arr.sort(compare1));