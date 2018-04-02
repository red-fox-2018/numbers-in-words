

let satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
let belasan = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
let puluhan = ['', 'sepuluh', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];

function numberInWords(num) {
    let result = '';
    if (num < 10) {
      result = satuan[num];
    } else if (num < 20) {
      result = belasan[num - 10];
    } else if (num < 100) {
      result = puluhan[Math.floor(num / 10)] + ' ' + numberInWords(num % 10);
    } else if (num < 1000) {
      result = numberInWords(Math.floor(num / 100)) + ' ratus ' +  numberInWords(num % 100);
    } else if (num < 1000000) {
      result = numberInWords(Math.floor(num / 1000)) + ' ribu ' +  numberInWords(num % 1000);
    } else if (num < 1000000000) {
      result = numberInWords(Math.floor(num / 1000000)) + ' juta ' +  numberInWords(num % 1000000);
    } else if (num < 1000000000000) {
      result = numberInWords(Math.floor(num / 1000000000)) + ' milyar ' + numberInWords(num % 1000000000);
    } else if (num < 1000000000000000) {
      result = numberInWords(Math.floor(num / 1000000000000)) + ' trilyun ' + numberInWords(num % 1000000000000);
    }
    return result.trim();
}

console.log(numberInWords(705));
console.log(numberInWords(2011845));
console.log(numberInWords(2211845));
console.log(numberInWords(2222111845));
console.log(numberInWords(222333211845));
console.log(numberInWords(222333444555666));