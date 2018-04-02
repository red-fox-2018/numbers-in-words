# numbers-in-words

FUNCTION in_words parameter number

SET numberString array dengan nilai 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'
SET numberDecimal array dengan nilai 1, 2, 3, 4, 5, 6, 7, 8, 9
SET numberOneDigit ke ''
SET sisaPuluh sama dengan number modulus 10
SET puluhan sama dengan Math.floor dari number dibagi 10
SET ratusan sama dengan Math.floor dari number dibagi 100
SET sisaRatus sama dengan number modulus 100
SET ribuan sama dengan Math.floor dari number dibagi 1000;
SET sisaRibu sama dengan number modulus 1000
SET jutaan  sama dengan Math.floor dari number dibagi 1000000;
SET sisaJuta sama dengan number modulus 1000000;
SET milyar sama dengan Math.floor dari number dibagi 1000000000;
SET sisaMilyar sama dengan number modulus 1000000000;
SET trilyun sama dengan Math.floor dari number dibagi 1000000000000);
SET sisaTrilyun sama dengan number modulus 1000000000000;

//mengkonvert angka satuan
  IF number kurang dari 10
    LOOP index i = 0, index i kurang dari panjang nilai numberDecimal dengan increment satu
      IF number kurang dari satu
        RETURN numberOneDigit
      END IF
      IF number kurang dari sama dengan numberDecimal index i
        numberOneDigit sama dengan numberString index i
        RETURN numberOneDigit ditambah FUNCTION in_words dari number dikurangi numberDecimal index i
      END IF
    END LOOP
  END IF

//mengkonvert angka belasan
  IF number diantara lebih besar dari 9 dan kurang dari 20
    IF number sama dengan 10
      RETURN `sepuluh`
    END IF
    IF number sama dengan 11
      RETURN `sebelas`
    END IF
    ELSE
      RETURN FUNCTION in_words dari sisaPuluh ditambah `belas`
    END ELSE
  END IF

//mengkonvert angka puluhan
  IF number diantara lebih dari 19 dan kurang dari 100
    RETURN FUNCTION in_words dari puluhan ditambah ` puluh` ditambah FUNCTION in_words dari sisaPuluh
  END IF

//mengkonvert angka ratusan sampe ribuan
  IF number diantara lebih dari 99 dan kurang dari 1000
    IF ratusan sama dengan 1
      RETURN `seratus` ditambah in_words FUNCTION dari sisaRatus
    END IF
    ELSE
      RETURN FUNCTION in_words dari ratusan ditamabah ` ratus ` ditambah FUNCTION in_words dari sisaRatus
    END ELSE
  END IF

//mengkonvert angka ribuan sampe jutaan
  IF number diantara lebih dari 999 dan kurang dari 1000000
    IF ribuan sama dengan 1
      RETURN `seribu ` ditambah FUNCTION in_words dari sisaRibu
    END IF
    ELSE
      RETURN FUNCTION in_words dari ribuan ditambah ` ribu ` ditambah FUNCTION in_words dari sisaRibu
    END ELSE
  END IF

//mengkonvert angka puluhan juta sampe milyaran
  IF number diantara lebih dari 999999 dan kurang dari 1000000000
    RETURN FUNCTION in_words dari jutaan ditambah ` juta ` ditambah FUNCTION in_words dari sisaJuta
  END IF

//mengkonvert angka ratusan milyar sampe ribuan milyar
  IF number diantara lebih dari 999999999 dan kurang dari 1000000000000
    RETURN FUNCTION in_words dari milyar ditambah ` milyar ` ditambah  FUNCTION in_words dari sisaMilyar
  END IF

//mengkonvert angka triliunan
  IF number diantara lebih dari 999999999999 dan kurang dari 1000000000000000
    RETURN FUNCTION in_words dari trilyun ditambah ` trilyun ` ditambah FUNCTION in_words dari sisaTrilyun;
  END IF

//mengkonvert angka lebih dari 1000 triliunan
  IF number bentuk STRING panjangnya lebih dari sama dengan 15
    RETURN `lebih dari seribu trilyun`
  END IF

END FUNCTION
