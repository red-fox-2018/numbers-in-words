# numbers-in-words

**PSEUDOCODE**

SET number AS parameter

  SET words WITH ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh']
  SET satuan WITH ''

  DO LOOPING FROM i = 1 TO i <= 10 WITH INCREMENT i + 1
    IF number = 1
      SET satuan WITH words INDEX i-1
      return satuan

  SET sisa WITH number modulus 10
    IF sisa = 1
      return 11
    ELSE
      return sisa + ' belas'

  SET depan WITH round number / 10
  SET sisa WITH number modulus 10
    return depan + 'puluh' + sisa

  SET depan WITH round number / 100
  SET sisa WITH number modulus 100
    IF depan = 1
      return 'seratus' + sisa
    ELSE
      return depan + 'ratus' + sisa

  SET depan WITH round number / 1000
  SET sisa WITH number modulus 1000
    IF depan = 1
      return 'seribu' + sisa
    ELSE
      return depan + 'seribu' + sisa

  SET depan WITH round number / 1000000
  SET sisa WITH number modulus 1000000
    return depan + 'juta' + sisa

  SET depan WITH round number / 1000000000
  SET sisa WITH number modulus 1000000000
    return depan + 'milyar' + sisa

  SET depan WITH round number / 1000000000000
  SET sisa WITH number modulus 1000000000000
    return depan + 'triliun' + sisa

IF number < 11
  return satuan
  ELSE
    IF number < 20
      return belasan
    IF number < 100
      return puluhan
    IF number < 1000
      return ratusan
    IF number < 1000000
      return ribuan
    IF number < 1000000000
      return jutaan
    IF number < 1000000000000
      return milyar
    IF number < 1000000000000000
      return milyar
