//CHUNK
var chunk = function (ar, nu) {
    var newarr = [];
    var temp = [];
    for (var i = 0; i < ar.length; i++) {
        if (i % nu == 0 && i != 0) {
            newarr.push(temp);
            temp = [];
        }
        temp.push(ar[i]);
    }
    return newarr;
};
//FIND
var find = function (ar, cond) {
    for (var i = 0; i < ar.length; i++) {
        if (cond) {
            return ar[i];
        }
    }
};
//SUM
var sum = function (ar) {
    for (var i = 1; i < ar.length; i++) {
        ar[0] = ar[0] + ar[i];
    }
    return ar[0];
};
//FILTER
var filter = function (ar, cond) {
    var newarr = [];
    for (var i = 0; i < ar.length; i++) {
        if (cond) {
            newarr.push(ar[i]);
        }
    }
    return newarr;
};
