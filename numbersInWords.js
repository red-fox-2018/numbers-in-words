function numbersInWords(num) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let words = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];

    // satuan
    if (num < 10) {
        // cara 1
        // for (let i = 0; i < numbers.length; i++) {
        //     if (num === numbers[i]) {
        //         return words[i];
        //     }
        // }
        // cara 2
        let index = numbers.indexOf(num);
        return words[index];
    } else {
        let front;
        let back;

        // belasan
        if (num === 10) {
            return 'sepuluh';
        } else if (num === 11) {
            return 'sebelas';
        } else if (num > 11 && num < 20) {
            back = num % 10;

            return `${numbersInWords(back)} belas`;
        }
        // puluhan
        if (num > 19 && num < 100) {
            front = Math.floor(num / 10);
            back = num % 10;

            return `${numbersInWords(front)} puluh ${numbersInWords(back)}`;
        }
        // ratusan
        if (num > 99 && num < 1000) {
            front = Math.floor(num / 100);
            back = num % 100;

            if (front === 1) {
                return `seratus ${numbersInWords(back)}`;
            } else {
                return `${numbersInWords(front)} ratus ${numbersInWords(back)}`;
            }
        }
        // ribuan
        if (num > 999 && num < 1000000) {
            front = Math.floor(num / 1000);
            back = num % 1000;

            if (front === 1) {
                return `seribu ${numbersInWords(back)}`;
            } else {
                return `${numbersInWords(front)} ribu ${numbersInWords(back)}`;
            }
        }
        // jutaan
        if (num > 999999 && num < 1000000000) {
            front = Math.floor(num / 1000000);
            back = num % 1000000;
            return `${numbersInWords(front)} juta ${numbersInWords(back)}`;
        }
        // milyaran
        if (num > 999999999 && num < 1000000000000) {
            front = Math.floor(num / 1000000000);
            back = num % 1000000000;
            return `${numbersInWords(front)} milyar ${numbersInWords(back)}`;
        }
        // triliunan
        if (num > 999999999999 && num < 1000000000000000) {
            front = Math.floor(num / 1000000000000);
            back = num % 1000000000000;
            return `${numbersInWords(front)} triliun ${numbersInWords(back)}`;
        }
    }
}

console.log(numbersInWords(3));
console.log(numbersInWords(10));
console.log(numbersInWords(11));
console.log(numbersInWords(55));
console.log(numbersInWords(123));
console.log(numbersInWords(323));
console.log(numbersInWords(1111));
console.log(numbersInWords(1011));
console.log(numbersInWords(5490));
console.log(numbersInWords(999999));
console.log(numbersInWords(1000000));
console.log(numbersInWords(1996865));
console.log(numbersInWords(1000000000));
console.log(numbersInWords(11000000000));
console.log(numbersInWords(1000000000000));
console.log(numbersInWords(999000000000000));