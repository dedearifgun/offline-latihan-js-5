// Import modul readline untuk input dari console
const readline = require("readline");

// Buat interface untuk input-output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array untuk menyimpan data siswa
let dataSiswa = [];

// Fungsi untuk menampilkan menu
function showMenu() {
  console.log("\n=== MENU DATA SISWA ===");
  console.log("1. Tambah Data");
  console.log("2. Tampilkan Data");
  console.log("3. Hapus Data");
  console.log("4. Cari Data");
  console.log("5. Keluar");

  rl.question("Pilih menu (1-5): ", (pilihan) => {
    switch (pilihan) {
      case "1": // Tambah Data
        tambahData();
        break;
      case "2": // Tampilkan Data
        tampilkanData();
        break;
      case "3": // Hapus Data
        hapusData();
        break;
      case "4": // Cari Data
        cariData();
        break;
      case "5": // Keluar
        console.log("Terima kasih, program selesai!");
        rl.close();
        break;
      default:
        console.log("Pilihan tidak valid!");
        showMenu();
        break;
    }
  });
}

// Fungsi tambah data siswa
function tambahData() {
  rl.question("Masukkan nama siswa: ", (nama) => {
    rl.question("Masukkan alamat: ", (alamat) => {
      rl.question("Masukkan no HP: ", (nohp) => {
        dataSiswa.push({ nama, alamat, nohp });
        console.log("✅ Data berhasil ditambahkan!");
        showMenu();
      });
    });
  });
}

// Fungsi tampilkan semua data siswa
function tampilkanData() {
  console.log("\n=== DAFTAR SISWA ===");
  if (dataSiswa.length === 0) {
    console.log("Belum ada data siswa.");
  } else {
    dataSiswa.forEach((s, i) => {
      console.log(`${i + 1}. Nama: ${s.nama}, Alamat: ${s.alamat}, No HP: ${s.nohp}`);
    });
  }
  showMenu();
}

// Fungsi hapus data siswa dengan konfirmasi
function hapusData() {
  console.log("\n=== HAPUS DATA SISWA ===");
  if (dataSiswa.length === 0) {
    console.log("Belum ada data siswa.");
    showMenu();
  } else {
    dataSiswa.forEach((s, i) => {
      console.log(`${i + 1}. Nama: ${s.nama}, Alamat: ${s.alamat}, No HP: ${s.nohp}`);
    });

    rl.question("Masukkan nomor data yang akan dihapus: ", (nomor) => {
      let index = parseInt(nomor) - 1;
      if (index >= 0 && index < dataSiswa.length) {
        let siswa = dataSiswa[index];
        rl.question(`Yakin hapus data ${siswa.nama}? (y/n): `, (jawab) => {
          if (jawab.toLowerCase() === "y") {
            dataSiswa.splice(index, 1);
            console.log("🗑️ Data berhasil dihapus!");
          } else {
            console.log("❎ Batal menghapus data.");
          }
          showMenu();
        });
      } else {
        console.log("❌ Nomor tidak valid!");
        showMenu();
      }
    });
  }
}

// Fungsi cari data siswa
function cariData() {
  rl.question("Masukkan nama yang ingin dicari: ", (keyword) => {
    let hasil = dataSiswa.filter((s) => s.nama.toLowerCase().includes(keyword.toLowerCase()));
    if (hasil.length > 0) {
      console.log("\n=== HASIL PENCARIAN ===");
      hasil.forEach((s, i) => {
        console.log(`${i + 1}. Nama: ${s.nama}, Alamat: ${s.alamat}, No HP: ${s.nohp}`);
      });
    } else {
      console.log("❌ Data tidak ditemukan!");
    }
    showMenu();
  });
}

// Jalankan menu pertama kali
showMenu();
