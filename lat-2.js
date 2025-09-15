let huruf = ['a','b','c','d','e'];
let hasil = "";

// looping array
huruf.forEach((item) => {
    hasil += item + "aba\n";
});

console.log(hasil);



// menggunakan map
let huruf1 = ['a','b','c','d','e'];
let hasil1 = huruf1.map(huruf1 => huruf1+ 'aba')
console.log(hasil1);

//menggunakan foreach
let kata = ['a','b','c','d','e'];
let hasil2 = "";
kata.forEach((item) => {
    hasil2 += item + "aba\n";
console.log(hasil2);
});