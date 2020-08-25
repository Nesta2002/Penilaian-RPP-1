var t = 1.7;
var b = 90;

var bmi = (b / (t * t));

console.log ("==================================================================");
console.log ("Tinggi badan                                      = " + t + "m");
console.log ("Berat badan                                       = " + b + "kg");
console.log ("BMI                                               = " + bmi)
if (bmi < 18.5) {
    console.log ("Status                                            = Kekurangan berat badan");
} else if (bmi <= 24.9) {
    console.log ("Status                                            = Normal (ideal");
} else if (bmi <= 29.9) {
    console.log ("Status                                            = Kelebihan berat badan");
} else {
    console.log ("Status                                            = Kegemukan (obesitas)");
};
console.log ("==================================================================");