function in_words(num){
    if(num<=0){
        return ''
    }
    var pembagi = {
        'triliun' : 1000000000000,
        'miliar' : 1000000000,
        'juta' : 1000000,
        'ribu' : 1000,
        'ratus' : 100,
        'puluh': 10,
        '' : 1   
    }
    var pembilang = {
        'sepuluh' : 10,
        'sembilan' : 9,
        'delapan' : 8,
        'tujuh' : 7,
        'enam' : 6,
        'lima' : 5,
        'empat' : 4,
        'tiga' : 3,
        'dua' : 2,
        'satu' : 1
    }
    for(let key in pembagi){
        var angkaDepan = Math.floor(num / pembagi[key])
        if(num>=pembagi[key]){
            if(num<100){
                if(num>10 && num<20){
                    for(let i in pembilang){
                        if(num%10==pembilang[i]){
                            return i+ ' belas ' 
                        }
                    }
                }
                if(num==1){
                    return 'se'
                }
                if(angkaDepan==1){
                    return 'sepuluh '
                }
                for(let i in pembilang){ 
                    if(angkaDepan==pembilang[i]){
                        return i + ' ' + key + ' ' + in_words(num % pembagi[key])
                    }
                }
                return angkaDepan + ' ' + key + ' ' + in_words(num % pembagi[key]) 
            }
            else{
                return in_words(angkaDepan)  + key + ' ' + in_words(num % pembagi[key])
            }
        }
    }       
}

console.log(in_words(10));
console.log(in_words(82))
console.log(in_words(4));
console.log(in_words(13400));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
console.log(in_words(8210271303240));