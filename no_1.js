var p = 20.5;
var l = 30;
var harga = 1500000;
var ppn = 0.15;

var luas = (p * l);
var total = (luas * harga);
var pajak = (total * ppn);

console.log ("==================================================================");
console.log ("Luas tanah yang dibeli Pak Arman                 = " + luas + "m2");
console.log ("Total harga tanah                                = Rp. " + total);
console.log ("Pajak yang harus dibayarkan                      = Rp. " + pajak);
console.log ("Total harga yang harus dibayarkan                = Rp. " + (total + pajak)); 
console.log ("==================================================================");