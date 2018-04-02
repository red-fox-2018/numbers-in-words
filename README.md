# numbers-in-words

# CREATE function numbersInWords with one parameter number
#   INITIALIZE numbers to array of number 1 untill 9
#   INITIALIZE words to array of string word of 1 until 9 and have same index with numbers
#   BASE CASE 
#   IF num is one digit
#      INITIALIZE index for find index number in array numbers
#      RETURN words[index]
#   RECURSIVE 
#   ELSE
#       INITIALIZE front
#       INITIALIZE back
#       IF num is 10
#           RETURN 'sepuluh'
#       IF num is 11
#           RETURN 'sebelas'
#       ELSE IF num greater than 11 and less than 20
#           INITIALIZE back with value num modulus 10
#           RETURN numbersInWords(back) plus 'belas'
#       IF num greater than 19 and less than 100
#           CHANGE front with value num devided by 10 (take the number before coma) 
#           CHANGE back with value num modulus 10
#           RETURN numbersInWords(front) plus 'puluh' plus numbersInWords(back)
#       IF num greater than 99 and less than 1000
#           CHANGE front with value num devided by 100 (take the number before coma) 
#           CHANGE back with value num modulus 100
#           IF front is 1, RETURN 'seratus' plus numbersInWords(back)
#           ELSE RETURN numbersInWords(front) plus 'ratus' plus numbersInWords(back)
#       IF num greater than 999 and less than 1000000
#           CHANGE front with value num devided by 1000 (take the number before coma) 
#           CHANGE back with value num modulus 1000
#           IF front is 1, RETURN 'seribu' plus numbersInWords(back)
#           ELSE RETURN numbersInWords(front) plus 'ribu' plus numbersInWords(back)
#       IF num greater than 999999 and less than 1000000000
#           CHANGE front with value num devided by 1000000 (take the number before coma) 
#           CHANGE back with value num modulus 1000000
#           RETURN numbersInWords(front) plus 'juta' plus numbersInWords(back)
#       IF num greater than 999999999 and less than 1000000000000
#           CHANGE front with value num devided by 1000000000 (take the number before coma) 
#           CHANGE back with value num modulus 1000000000
#           RETURN numbersInWords(front) plus 'milyar' plus numbersInWords(back)
#       IF num greater than 999999999999 and less than 1000000000000
#           CHANGE front with value num devided by 1000000000000 (take the number before coma) 
#           CHANGE back with value num modulus 1000000000000
#           RETURN numbersInWords(front) plus 'triliun' plus numbersInWords(back)
