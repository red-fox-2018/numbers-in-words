# numbers-in-words

- store specialNum as array of object with number and words as the keys of object, special case from 0 to 19
- store variable numStr as number converted to string
- store variable angkaDepan
- store variable sisa
- if length of numStr equals to 0 then return empty string
- for variable i equals to 0, i smaller than length of specialNum, i added by 1 for each loop
- if num equals to number of specialNum with index i then return words of specialNum with index i

- if length of numStr equals to 2 and index 0 of numStr not equals to 1 then
-- angkaDepan equals to lower value of num divided by 10
-- sisa equals to num modulus 10
-- return function toWords with angkaDepan as parameter plus 'puluh' plus function toWords with sisa as parameter

- if length of numStr equals to 3 then
-- angkaDepan equals to lower value of num divided by 100
-- sisa equals to num modulus 100
-- if angkaDepan equals to 1 then return 'seratus' + function toWords with sisa as parameter
-- return function toWords with angkaDepan as parameter plus 'ratus' plus function toWords with sisa as parameter

- if length of numStr bigger than equals to 4 and smaller than equals to 6 then
-- angkaDepan equals to lower value of num divided by 1000
-- sisa equals to num modulus 1000
-- if angkaDepan equals to 1 then return 'seribu' + function toWords with sisa as parameter
-- return function toWords with angkaDepan as parameter plus 'ribu' plus function toWords with sisa as parameter

- if length of numStr bigger than equals to 7 and smaller than equals to 9 then
-- angkaDepan equals to lower value of num divided by 1000000
-- sisa equals to num modulus 1000000
-- return function toWords with angkaDepan as parameter plus 'juta' plus function toWords with sisa as parameter

- if length of numStr bigger than equals to 10 and smaller than equals to 12 then
-- angkaDepan equals to lower value of num divided by 1000000000
-- sisa equals to num modulus 1000000000
-- return function toWords with angkaDepan as parameter plus 'milyar' plus function toWords with sisa as parameter

- if length of numStr bigger than equals to 13 and smaller than equals to 15 then
-- angkaDepan equals to lower value of num divided by 1000000000000
-- sisa equals to num modulus 1000000000000
-- return function toWords with angkaDepan as parameter plus 'triliun' plus function toWords with sisa as parameter
