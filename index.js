function ratusan(num){
  let number= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ,19];
  let word= ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas' ,'sembilan belas'];
  let result = '';

  if(num <= 0){
    return result
  }

  let indexOfNum = number.indexOf(num);
  let numToStr = num.toString();
  let numToStrlen = numToStr.length;
  let fNumIndex;


  if(num == number[indexOfNum]){
    return word[indexOfNum]
  }else if (numToStrlen === 2) {
    fNumIndex =number.indexOf(Number(numToStr.charAt(0)))
    result = `${word[fNumIndex]} puluh `
    return result + ratusan(num % 10)
  }else if (numToStrlen === 3) {
    fNumIndex =number.indexOf(Number(numToStr.charAt(0)))
    if(numToStr.charAt(0) == 1){
      result = 'seratus '
    }else{
    result = `${word[fNumIndex]} ratus `
    }
    return result + ratusan(num % 100)
  }
}

function numberToWords(num){
  let result ='';
  let threeNumFirst;
  let numToStr = num.toString();
  let numToStrlen = numToStr.length;

  if(num <= 0){
    return result
  }

  if(numToStrlen <= 3){
    return ratusan(num)
  }else if(numToStrlen > 3 && numToStrlen <=6){ // RIBU
    threeNumFirst = ratusan(Number(numToStr.slice(0, -3)))
    result = `${threeNumFirst} ribu `
    return result + numberToWords(Number(numToStr % 1000))
  }else if(numToStrlen > 6 && numToStrlen <= 9){ // JUTA
    threeNumFirst = ratusan(Number(numToStr.slice(0, -6)))
    result = `${threeNumFirst} juta `
    return result + numberToWords(Number(numToStr % 1000000))
  }else if(numToStrlen > 9 && numToStrlen <= 12){// MILYAR
    threeNumFirst = ratusan(Number(numToStr.slice(0, -9)))
    result = `${threeNumFirst} milyar `
    return result + numberToWords(Number(numToStr % 1000000000))
  }else if(numToStrlen > 12 && numToStrlen <= 15){// TRILIYUN
    threeNumFirst = ratusan(Number(numToStr.slice(0, -12)))
    result = `${threeNumFirst} Triliyun `
    return result + numberToWords(Number(numToStr % 1000000000000))
  }
}
// Driver code
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(381000));
console.log(numberToWords(60122876));
console.log(numberToWords(61012287676));
console.log(numberToWords(821827134546783));
