var barang = [
    {nama : "Beras", harga : 10000, jumlah : 5},
    {nama : "Gula", harga : 14000, jumlah : 5},
    {nama : "Telur", harga : 20000, jumlah : 2},
    {nama : "Minyak Goreng", harga : 9000, jumlah : 10}
];
var totalHarga = 0;
var totalBarang = barang.length - 1;

for (var i = 0; i <= totalBarang; i++) {
    var hargaBarang = barang[i].harga * barang[i].jumlah
    totalHarga += hargaBarang
};

console.log ("==================================================================");
console.log (barang);
console.log ("Total Belanja                                     = Rp. " + totalHarga);
console.log ("==================================================================");