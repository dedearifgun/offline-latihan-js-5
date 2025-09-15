// Import library prompt-sync agar bisa input di terminal
const prompt = require("prompt-sync")({sigint:true});

// Daftar produk
let product = [
 {nama:"laptop", harga:12000000},
 {nama:"handphone", harga:3500000},
 {nama:"tablet", harga:5000000},
 {nama:"smartwatch", harga:2000000},
 {nama:"earphone", harga:1500000}
];

// Keranjang belanja kosong
let cart = [];

// Fungsi untuk format rupiah
function toRupiah(angka){
    return "Rp " + angka.toLocaleString("id-ID");
}

// Tampilkan daftar harga produk
console.log("\n=== Daftar Harga Produk ===");
product.forEach((item) => {
    console.log(`Nama: ${item.nama}, Harga: ${toRupiah(item.harga)}`);
});

// Loop untuk menambahkan barang ke keranjang
while(true){
    // Input nama barang
    let cari = prompt("Masukkan nama barang yang ingin dibeli: ").toLowerCase();

    // Cari barang dalam daftar
    let barang = product.find(p => p.nama.toLowerCase() === cari);

    if(barang){
        // Jika barang ditemukan, masukkan ke keranjang
        cart.push(barang);
        console.log(`${barang.nama} berhasil dimasukkan ke keranjang.`);
    } else {
        // Jika tidak ditemukan
        console.log("Barang tidak tersedia.");
    }

    // Tanya apakah ingin tambah barang lagi
    let lagi = prompt("Ada barang lain yang ingin dimasukkan? (y/n): ").toLowerCase();
    if(lagi !== "y"){
        break;
    }
}

// Hitung total belanja
let total = cart.reduce((sum, item) => sum + item.harga, 0);

// Tampilkan isi keranjang
console.log("\n=== Keranjang Belanja ===");
cart.forEach((item, i) => {
    console.log(`${i+1}. ${item.nama} - ${toRupiah(item.harga)}`);
});
console.log("Total Belanja:", toRupiah(total));

// Checkout: masukkan uang
let uang = parseInt(prompt(`Total belanja ${toRupiah(total)}. Masukkan uang: `));

if(uang >= total){
    console.log("Pembayaran berhasil!");
    console.log("Uang yang dibayarkan:", toRupiah(uang));
    console.log("Kembalian:", toRupiah(uang - total));
} else {
    console.log("Uang tidak cukup untuk membayar belanjaan.");
}
