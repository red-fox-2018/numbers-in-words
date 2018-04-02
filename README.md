# numbers-in-words

1. buat array berisikan angka 11 -1
2. buat array berisikan tulisan angka berdasarkan urutan (no.1)
3. jika num lebih kecil daripada angka 12 maka lakukan looping
4. looping dari kiri ke kanan i sama dengan 0, i < array angka(no.1), i++
  4b. buat sebuah var untuk menampung hasil berupa text
  4c. jika hasil lebih kecil dari 1 maka return hasilnya
  4d. jika num lebih besar atau samadengan angka[i]
  4e. maka hasil sama dengan huruf[i]
  4f. return hasil + rekursif dari number in words di kurangi dengan angka[i]
5. jika angka sudah dua maka kita harus mencari angka depan dan angka belakang
6. untuk mencari angkadepan maka bilangan kita pertama menggunakan mathfloor kemudian bagi dengan 10
7. untuk angka belakangnya kita modulus nilai tersebut dengan angka 10 juga
8. setelah itu panggil fungsi rekursif untuk angka depan dan belakang setelah itu masukan kedalam penampung string
9. lakukan berulang sampai dengan angka yang di cari.
