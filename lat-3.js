const prompt = require("prompt-sync")();  

// Buat array of object berisi data mahasiswa (nama dan nilai)
let mahasiswa = [
    {nama: "andi", nilai: 60},
    {nama: "budi", nilai: 92},  
    {nama: "caca", nilai: 46},
    {nama: "dodi", nilai: 88},
];

// -----------------------------
// 1. Menampilkan data mahasiswa
// -----------------------------
console.log("\nDaftar Nilai Mahasiswa:");  // Judul daftar nilai
mahasiswa.forEach((mhs) => {               // Looping tiap objek di array mahasiswa
    console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`); // Cetak nama dan nilai
});

// -----------------------------
// 2. Membuat array baru hanya berisi nama
// -----------------------------
let daftarnama = mahasiswa.map((mhs) => mhs.nama); // Ambil hanya property "nama" dari tiap mahasiswa
console.log("\nDaftar Nama Mahasiswa:");           // Judul daftar nama
console.log(daftarnama);                           // Cetak array nama saja

// -----------------------------
// 3. Mengurutkan berdasarkan nilai tertinggi
// -----------------------------
let urutNilai = [...mahasiswa]                     // Salin array mahasiswa agar tidak merusak data asli
    .sort((a, b) => b.nilai - a.nilai);            // Urutkan descending berdasarkan nilai
console.log("\nUrutan Berdasarkan Nilai (Tertinggi -> Terendah):"); 
urutNilai.forEach(mhs => console.log(`${mhs.nama} - ${mhs.nilai}`)); // Cetak hasil urutan

// -----------------------------
// 4. Mencari mahasiswa berdasarkan nama
// -----------------------------
let cariLagi = true; // Variabel untuk mengontrol loop pencarian
while (cariLagi) {
    let cariNama = prompt("Masukkan nama mahasiswa yang dicari:"); // Input nama dari user
    let hasilCari = mahasiswa.find(                               // Cari 1 mahasiswa sesuai input
        mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase()  // Bandingkan lowercase biar tidak peka huruf besar/kecil
    );

    if (hasilCari) {  // Jika ditemukan
        console.log(`\nDitemukan: ${hasilCari.nama} dengan nilai ${hasilCari.nilai}`);
    } else {          // Jika tidak ditemukan
        console.log("\nMahasiswa tidak ditemukan.");
    }

    // Tanya apakah ingin mencari lagi
    let jawab = prompt("Apakah Anda ingin mencari mahasiswa lain? (ya/tidak): ").toLowerCase();
    if (jawab !== "ya") {
        cariLagi = false; // Keluar dari loop jika jawabannya bukan "ya"
    }
}

// -----------------------------
// 5. Menentukan status Lulus / Tidak Lulus
// -----------------------------
console.log("\nStatus Kelulusan Mahasiswa:");
mahasiswa.forEach((mhs) => {                               // Looping tiap mahasiswa
    let status = mhs.nilai >= 75 ? "Lulus" : "Tidak Lulus"; // Pakai operator ternary untuk tentukan status
    console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}, Status: ${status}`);
});

// -----------------------------
// 6. Pencarian berdasarkan status Lulus / Tidak Lulus
// -----------------------------
let cariStatus = prompt("\nCari mahasiswa berdasarkan status (Lulus/Tidak Lulus): ").toLowerCase(); // Input status dari user
let hasilStatus = mahasiswa.filter((mhs) => {                // Filter mahasiswa berdasarkan status
    let status = mhs.nilai >= 75 ? "lulus" : "tidak lulus";   // Tentukan status
    return status === cariStatus;                            // Cocokkan dengan input user
});

if (hasilStatus.length > 0) {  // Jika ada hasil
    console.log(`\nMahasiswa dengan status "${cariStatus}":`);
    hasilStatus.forEach((mhs) => console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`));
} else {  // Jika tidak ada hasil
    console.log(`\nTidak ada mahasiswa dengan status "${cariStatus}".`);
}