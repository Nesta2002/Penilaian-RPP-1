var a = 4;
var r = 3;
var n = 10;
var sN = 0;

for (var i = 0; i < n; i++) {
    if (i < 1) {
        a = a;
    } else {
        a = a * r;
        sN = sN + a;
    };
};

console.log ("==================================================================");
console.log ("Suku pertama                                      = 4");
console.log ("Rasio                                             = " + r);
console.log ("n                                                 = " + n);
console.log ("S10                                               = " + sN);
console.log ("==================================================================");