function in_words(nilai){
    var kata = {
        nol: 0,
        Satu: 1,
        Dua:2,
        Tiga:3,
        Empat:4,
        Lima: 5,
        Enam:6,
        Tujuh: 7,
        Delapan: 8,
        Sembilan: 9
    }
    var tingkat = {
        Triliun: 1000000000,
        Milyar: 100000000,
        Juta: 1000000,
        Ribu: 1000,
        Ratus: 100,
        Puluh: 10, 
    };
    
    if(nilai<10){
        return Object.keys(kata)[nilai]
    }
    else if(nilai==11){
        return "SeBelas"
    }
    else if(nilai==10){
        return "SePuluh"
    }
    else if(nilai<20){
        return Object.keys(kata)[nilai-10] + "Belas"
    }
    var str = ''
    var nilaiAsli = 1
    for(var x in tingkat){
        if(nilai>=tingkat[x]){
            var hasilbagi = Math.floor(nilai/tingkat[x])
            nilaiAsli = hasilbagi * tingkat[x]
            if(hasilbagi >= 10){
                return in_words(hasilbagi) +" "+ x +" "+ in_words(nilai-nilaiAsli)
            }
            else if(Math.floor(nilai/tingkat[x])==1){
                return "Se" + x
            }
            else{
                return Object.keys(kata)[String(nilai)[0]] +" "+ x + " "+in_words(nilai-nilaiAsli)
            }
        }
    }
}

console.log(in_words(4))
console.log(in_words(27))
console.log(in_words(102))
console.log(in_words(38079))
