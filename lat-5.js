// function declaration
function Mhs(nama, energi) {
    let mhs = {};              // buat object kosong
    mhs.nama = nama;           // tambahkan properti nama
    mhs.energi = energi;       // tambahkan properti energi

    // method makan
    mhs.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan! Energi sekarang: ${this.energi}`);
    }

    // method main
    mhs.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat main! Energi sekarang: ${this.energi}`);
    }

    return mhs; // kembalikan object mhs
}

// membuat object baru
let aku = Mhs('Aku', 10);
let kamu = Mhs('Kamu', 10);
