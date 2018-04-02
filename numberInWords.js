function in_words(angka) {
  
  var pembagi= {
  	'triliun':1000000000000,
    'miliar':1000000000,
    'juta':1000000,
  	'ribu':1000,
    'ratus':100,
  	'puluh':10,
  	'':1
  }

  var satuan= {
    'satu':1,
    'dua':2,
    'tiga':3,
    'empat':4,
    'lima':5,
    'enam':6,
    'tujuh':7,
    'delapan':8,
    'sembilan':9, 
  }
  
  if(angka<=0) {
    return '';
  }
  
  
  for(var i in pembagi) {
    if(angka>=pembagi[i]){
      for(var j in satuan){
        if(satuan[j]===Math.floor(angka/pembagi[i])){
          return j+' '+i+' '+in_words(angka%pembagi[i])
        }
        
      }
    }
  	
  }   
  	
}

console.log(in_words(1950))

