let angka = [1,2,3,4,5];
//forEach => Hanya looping
angka.forEach(num => {
    console.log(num*2); //cuman cetak hasil, tidak simpan
});

//map => menghasilkan array baru
let hasil = angka.map(num => num*2);
console.log(hasil); // output: [2,4,6,8,10] (array baru hasil transformasi)