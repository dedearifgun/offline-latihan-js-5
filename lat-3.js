const prompt = require("prompt-sync")();

let mahasiswa = [
    {nama: "andi", nilai: 60},
    {nama: "budi", nilai: 92},  
    {nama: "caca", nilai: 46},
    {nama: "dodi", nilai: 88},
];

// Data Mahasiswa
console.log("\nDaftar Nilai Mahasiswa:");
mahasiswa.forEach((mhs) => {
    console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`);
});

// 2. Array baru mahasiswa
let daftarnama = mahasiswa.map((mhs) => mhs.nama);
console.log("\nDaftar Nama Mahasiswa:");
console.log(daftarnama);

// 3. Urutkan berdasarkan nilai tertinggi
let urutNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
console.log("\nUrutan Berdasarkan Nilai (Tertinggi -> Terendah):");
urutNilai.forEach(mhs => console.log(`${mhs.nama} - ${mhs.nilai}`));

// 4. Cari mahasiswa berdasarkan nama
let cariNama = prompt("Masukkan nama mahasiswa yang dicari:");
let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());

if (hasilCari) {
    console.log(`\nDitemukan: ${hasilCari.nama} dengan nilai ${hasilCari.nilai}`);
} else {
    console.log("\nMahasiswa tidak ditemukan.");
}

// 5. Tambahkan fitur lulus dan tidak lulus
console.log("\nStatus Kelulusan Mahasiswa:");
mahasiswa.forEach((mhs) => {
    let status = mhs.nilai >= 75 ? "Lulus" : "Tidak Lulus";
    console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}, Status: ${status}`);
});