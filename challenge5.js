var in_words = function(num){
    var temp = 0;
    var temp2 = '';
    var temp3 = 0;
    let bilang = {
        satu: 1,
        dua: 2,
        tiga: 3,
        empat: 4,
        lima: 5,
        enam: 6,
        tujuh: 7,
        delapan: 8,
        sembilan: 9
    }
    let sebut = {
        triliun: 1000000000000,
        milyar: 100000000,
        juta: 1000000,
        ribu: 1000,
        ratus: 100,
        puluh: 10
    }
    if(num === 0){
        return '';
    }
    else if(num>10 && num <20){
        for(let i in bilang){
            if(num%10===1){
                return 'sebelas'
            }
            else{
                return Object.keys(bilang)[num%10-1]+' belas'
            }
        }
    }
    else if(num>0 && num<10){
        return Object.keys(bilang)[num-1];
    }
    else{
        for(let i in sebut){
            if(num>=sebut[i]){
                if(Math.floor(num/sebut[i])===1){
                    return 'se' + i +' '+ in_words(num-((Math.floor(num/sebut[i]))*sebut[i]))
                }
                else{
                    return in_words(Math.floor(num/sebut[i]))+' ' + i +' '+ in_words(num-((Math.floor(num/sebut[i]))*sebut[i]))
                }
            }
        }
    }
}

console.log(in_words(4))
console.log(in_words(27))
console.log(in_words(102))
console.log(in_words(38079))
console.log(in_words(82102713))
console.log(in_words(999999999999999))