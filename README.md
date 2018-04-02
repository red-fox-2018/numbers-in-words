# numbers-in-words

STORE 'number' with number value
STORE 'in_words' as a method
    STORE 'numberArr' with array number value
    STORE 'word' with array string value

    IF 'number' less than 10
        RETURN 'word' index 'number'

    IF 'number' greater than 10 AND number less than 100
        IF 'number' greater than 11 AND 'number' less than 20
            STORE 'digitBelakang' equal to 'number' MOD 10
            IF 'number' equal to 11
                RETURN 'sebelas'
            RETURN 'in_words' with 'digitBelakang' as parameter + 'belas'
        STORE 'digitDepan' with 'number' divide 10
        STORE 'digitBelakang' with 'number' MOD 10
        IF 'number' equal to 10
            RETURN 'sepuluh'
        RETURN 'in_words' with 'digitDepan' as parameter + 'puluh' + 'in_words' with 'digitBelakang' as parameter


        ELSE IF 'number' greater than equal to 100 AND 'number' less than 1000
            STORE 'digitDepan' with 'number' divide 100
            STORE 'digitBelakang' with 'number' MOD 100
            IF 'digitDepan' equal to 1
                RETURN 'seratus' + 'in_words' with 'digitBelakang' as parameter
            RETURN 'in_words' with 'digitDepan' as parameter + 'ratus' + 'in_words' with 'digitBelakang' as parameter

        ELSE IF 'number' greater than equal to 1000 AND 'number' less than 100000
            STORE 'digitDepan' with 'number' divide 1000
            STORE 'digitBelakang' with 'number' MOD 1000
            IF 'digitDepan' equal to 1
                RETURN 'seribu' + 'in_words' with 'digitBelakang' as parameter
            RETURN 'in_words' with 'digitDepan' as parameter + 'ribu' + 'in_words' with 'digitBelakang' as parameter

        ELSE IF 'number' greater than equal to 100000 AND 'number' less than 1000000
            STORE 'digitDepan' with 'number' divide 100000
            STORE 'digitBelakang' with 'number' MOD 100000
            IF 'digitDepan' equal to 1
                IF 'number' index 1 equal to 0 and 'number' index 2 equal to 0
                    RETURN 'seratus ribu' + 'in_words' with 'digitBelakang' as parameter
                RETURN 'seratus' + 'in_words' with 'digitBelakang' as parameter
            RETURN 'in_words' with 'digitDepan' as parameter + 'seratus' + 'in_words' with 'digitBelakang' as parameter

        ELSE IF 'number' greater than equal to 1000000 AND 'number' less than 1000000000
            STORE 'digitDepan' with 'number' divide 1000000
            STORE 'digitBelakang' with 'number' MOD 1000000
            RETURN 'in_words' with 'digitDepan' as parameter + 'juta' + 'in_words' with 'digitBelakang' as parameter

        ELSE IF 'number' greater than equal to 1000000000 AND 'number' less than 1000000000000
            STORE 'digitDepan' with 'number' divide 1000000000
            STORE 'digitBelakang' with 'number' MOD 1000000000
            RETURN 'in_words' with 'digitDepan' as parameter + 'milyar' + 'in_words' with 'digitBelakang' as parameter

        ELSE IF 'number' greater than equal to 1000000000000 AND 'number' less than 1000000000000000
            STORE 'digitDepan' with 'number' divide 1000000000000
            STORE 'digitBelakang' with 'number' MOD 1000000000000
            RETURN 'in_words' with 'digitDepan' as parameter + 'triliyun' + 'in_words' with 'digitBelakang' as parameter

        ELSE IF 'number' greater than 1000000000000000
            RETURN 'out of range'
