let huruf = ['a','b','c','d','e'];
let hasil = "";

// looping array
huruf.forEach((item, index) => {
    if (index === 0) {
        // khusus index pertama
        hasil += "aa\n";
    } else {
        // sisanya: huruf + "aba"
        hasil += item + "aba\n";
    }
});

console.log(hasil);


// menggunakan map
let huruf1 = ['a','b','c','d','e'];
let hasil1 = huruf1.map(huruf1 => huruf1+ 'ba')
console.log(hasil1);