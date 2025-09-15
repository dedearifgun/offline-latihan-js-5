let angka = [1,2,3,4,5];
//forEach => Hanya looping
angka.forEach(num => {
    console.log(num*2); //cuman cetak hasil, tidak simpan
});

//map => menghasilkan array baru
let hasil = angka.map(num => num*2);
console.log(hasil); // output: [2,4,6,8,10] (array baru hasil transformasi)




let product = [
 {nama:"laptop", harga:12000000},
 {nama:"handphone", harga:3500000},
 {nama:"tablet", harga:5000000},
 {nama:"smartwatch", harga:2000000},
 {nama:"earphone", harga:1500000}
];
console.log("\nDaftar Harga Produk:");
product.forEach((item) => {
    console.log(`Nama: ${item.nama}, Harga: ${item.harga}`);
});