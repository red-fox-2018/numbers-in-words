function in_word(angka){

  // menggunakan recursive
  if(angka < 11) {
    return satuan(angka)
  }

  if(angka > 9 && angka < 20) {
    return belasan(angka)
  }

  if(angka > 19 && angka < 100) {
    return puluhan(angka)
  }

  if(angka > 99 && angka < 1000) {
    return ratusan(angka)
  }

  if(angka > 999 && angka < 1000000) {
    return ribuan(angka)
  }

  if(angka > 999999 && angka < 1000000000) {
    return jutaan(angka)
  }

  if(angka > 999999999 && angka < 1000000000000) {
    return miliyar(angka)
  }

  if(angka > 999999999999 && angka < 1000000000000000) {
    return triliun(angka)
  }

  function triliun(angka) {
    let depan = Math.floor(angka/1000000000000)
    let sisa = angka % 1000000000000
    return in_word(depan) + ' triliun ' + in_word(sisa)
  }

  function miliyar(angka) {
    let depan = Math.floor(angka/1000000000)
    let sisa = angka % 1000000000
    return in_word(depan) + ' miliyar ' + in_word(sisa)
  }

  function jutaan(angka) {
    let depan = Math.floor(angka/1000000)
    let sisa = angka % 1000000
    return in_word(depan) + ' juta ' + in_word(sisa)
  }

  function ribuan(angka) {
    let depan = Math.floor(angka/1000);
    let sisa = angka % 1000;

    if(depan == 1) {
      return 'seribu ' + in_word(sisa);
    } else {
      return in_word(depan) + ' ribu ' + in_word(sisa);
    }
  }

  function ratusan(angka) {
    let ratusan = Math.floor(angka/100)
    let sisa = angka % 100;
    
    if(ratusan == 1) {
      return 'seratus ' + in_word(sisa);
    } else {
      return satuan(ratusan) + ' ratus ' + in_word(sisa);
    }
  }

  function puluhan(angka) {
    let puluhan = Math.floor(angka/10)
    let sisa = angka % 10;
    return satuan(puluhan) + ' puluh ' + in_word(sisa)
  }

  function belasan(angka) {
    let sisa = angka % 10;
    if(sisa == 1) {
      return 'sebelas'
    } else {
      return satuan(sisa) +' belas'
    }
  }

  function satuan(angka) {
    let satuan = [{
      nilai: 0,
      bilangan: ''
    },{
      nilai: 1,
      bilangan: 'satu'
    },{
      nilai: 2,
      bilangan: 'dua'
    },{
      nilai: 3,
      bilangan: 'tiga'
    },{
      nilai: 4,
      bilangan: 'empat'
    },{
      nilai: 5,
      bilangan: 'lima'
    },{
      nilai: 6,
      bilangan: 'enam'
    },{
      nilai: 7,
      bilangan: 'tujuh'
    },{
      nilai: 8,
      bilangan: 'delapan'
    },{
      nilai: 9,
      bilangan: 'sembilan'
    },{
      nilai: 10,
      bilangan: 'sepuluh'
    }]
  
    for(let i=satuan.length-1; i>=0; i--) {
      if(angka - satuan[i].nilai == 0) {
        return satuan[i].bilangan
      }
    }
  }
}

console.log(in_word(1))
console.log(in_word(9))
console.log(in_word(14))
console.log(in_word(49))
console.log(in_word(2435))
console.log(in_word(1987765))
