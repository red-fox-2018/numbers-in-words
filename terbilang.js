function in_words(num) {
    if (num <= 0) {
        return ''
    }
    var pembagi = {
        'triliun': 1000000000000,
        'miliar': 1000000000,
        'juta': 1000000,
        'ribu': 1000,
        'ratus': 100,
        'puluh': 10,
        '': 1
    }
    var pembilang = [
        '', 'satu','dua','tiga','empat','lima',
        'enam','tujuh','delapan','sembilan','sepuluh',
    ]
    for (let key in pembagi) {
        var angkaDepan = Math.floor(num / pembagi[key])       
        if (num >= pembagi[key]) {
            if (num < 100) {
                if (num> 10 && num < 20) { 
                    if(num%10==1){
                        return 'sebelas '
                    }
                    else {
                        return pembilang[num%10] + ' belas '
                    } 
                }
                if (num == 10) {
                    return 'sepuluh '
                }
                return pembilang[angkaDepan] + ' '+ key + ' ' + in_words(num % pembagi[key])
            }
            else {
                if(angkaDepan==1 && num<2000){
                    return 'se' + key + ' ' + in_words(num % pembagi[key])
                }
                return in_words(angkaDepan) + key + ' ' + in_words(num % pembagi[key])
            }
        }
    }
}

console.log(in_words(131125))
console.log('---------------');
console.log(in_words(1201));
console.log('---------------');
console.log(in_words(13411));
console.log('---------------');
console.log(in_words(38079));
console.log('---------------');
console.log(in_words(82102713));
console.log('---------------');
console.log(in_words(8210271303240));