function in_words(angka){
  var angkaString = angka.toString();
  var arrayAngka = angkaString.split("");
  var fun = arrayAngka.reverse();
  var word = [];
  for(var i = 0; i < angkaString.length; i++){
    if ((((i-2)%3)==0) && (fun[i] != "0")){
      word.push("ratus");
    }
    if (((i>0)&&(((i-3)%3)==0)) && (fun[i] != "0")){
      word.push("ribu");
    }
    if (((i>0)&&(((i-6)%3)==0)) && ((fun[i] != "0")&& fun[i+3] != "0" )){
      word.push("juta");
    }
    if ((((i-1)%3)==0)){
      if ((fun[i] == "1")&&(fun[i-1] == "0")){
        word.pop();
        word.push("sepuluh");
      }
      if ((fun[i] == "1")&&(fun[i-1] == "1")){
        word.pop();
        word.push("sebelas");
      }
      if ((fun[i] == "1")&&(fun[i-1] == "2")){
        word.pop();
        word.push("dua belas");
      }
      if ((fun[i] == "1")&&(fun[i-1] == "3")){
        word.pop();
        word.push("tiga belas");
      }
      if ((fun[i] == "1")&&(fun[i-1] == "4")){
        word.pop();
        word.push("empat belas");
      }
      if ((fun[i] == "1")&&(fun[i-1] == "5")){
        word.pop();
        word.push("lima belas");
      }
      if ((fun[i] == "1")&&(fun[i-1] == "6")){
        word.pop();
        word.push("enam belas");
      }
      if ((fun[i] == "1")&&(fun[i-1] == "7")){
        word.pop();
        word.push("tujuh belas");
      }
      if ((fun[i] == "1")&&(fun[i-1] == "8")){
        word.pop();
        word.push("delapan belas");
      }
      if ((fun[i] == "1")&&(fun[i-1] == "9")){
        word.pop();
        word.push("sembilan belas");
      }
      if ((fun[i] == "2")){
        word.push("dua puluh");
      }
      if ((fun[i] == "3")){
        word.push("tiga puluh");
      }
      if ((fun[i] == "4")){
        word.push("empat puluh");
      }
      if ((fun[i] == "5")){
        word.push("lima puluh");
      }
      if ((fun[i] == "6")){
        word.push("enam puluh");
      }
      if ((fun[i] == "7")){
        word.push("tujuh puluh");
      }
      if ((fun[i] == "8")){
        word.push("delapan puluh");
      }
      if ((fun[i] == "9")){
        word.push("sembilan puluh");
      }
    }else{
      if ((fun[i] == "1")){
        word.push("satu");
      }
      if ((fun[i] == "2")){
        word.push("dua");
      }
      if ((fun[i] == "3")){
        word.push("tiga");
      }
      if ((fun[i] == "4")){
        word.push("empat");
      }
      if ((fun[i] == "5")){
        word.push("lima");
      }
      if ((fun[i] == "6")){
        word.push("enam");
      }
      if ((fun[i] == "7")){
        word.push("tujuh");
      }
      if ((fun[i] == "8")){
        word.push("delapan");
      }
      if ((fun[i] == "9")){
        word.push("sembilan");
      }
    }
  }
  word.reverse();
  var hasil = word.join(" ");

  return hasil;
}

console.log(in_words(234));



