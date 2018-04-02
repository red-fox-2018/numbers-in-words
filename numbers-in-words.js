function in_word(num) {
  let obj = {
    nol: 0,
    satu:1,
    dua:2,
    tiga:3,
    empat:4,
    lima:5,
    enam:6,
    tujuh:7,
    delapan:8,
    sembilan:9
  }
  let obj2 = {
    trilyun: 1000000000000,
    milyar: 1000000000,
    juta: 1000000,
    ribu: 1000,
    ratus: 100,
    puluh: 10,
  }
  if( num < 10 ) {
    for (let i in obj) {
      if (obj[i] === num) {
        return i;
      }
    }
  }else if (num < 20) {
    for (let i in obj) {
      let sisa = Math.floor(num / 10);
      if (sisa === obj[i]) {
        return i + ' belas';
      }else if (sisa === 1){
        return 'sebelas';
      }
    }
  }
  
  for  (let i in obj2) {
    if(num >= obj2[i]) {
      // console.log(obj2[i])
      let sisa = Math.floor(num / obj2[i]);
      if (sisa === 1) {
        return "se" + i + " " + in_word(num%obj2[i])
      }else if (sisa < 10) {
        return Object.keys(obj)[sisa] + " " + i + " " + in_word(num%obj2[i])  
      }else {
        return in_word(sisa)  + " " + i + " " + in_word(num%obj2[i]) 
      }
    }
  }
}
// console.log(in_word(4));
// empat
console.log(in_word(27));
// dua puluh tujuh
console.log(in_word(102));
// // seratus 2
console.log(in_word(38079));
// // tiga puluh delapan ribu tujuh puluh sembilan
console.log(in_word(82102713));
// // delapan puluh juta seratus dua ribu tujuh ratus tiga belas