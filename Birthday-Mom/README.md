# Birthday-Mom

Website ucapan ulang tahun untuk Mama — 29 November 2026.

## Menjalankan website
1. Ekstrak folder `Birthday-Mom`.
2. Buka folder tersebut di Visual Studio Code.
3. Buka `index.html` dengan browser, atau gunakan ekstensi Live Server di VS Code.
4. Untuk musik, letakkan file musik instrumental MP3 milik sendiri/berlisensi di `assets/music/` dan beri nama `birthday.mp3`.

## Mengganti foto
Versi awal menyediakan tiga kartu kenangan dekoratif. Foto dapat ditambahkan pada tahap berikutnya dengan mengubah bagian `memory-grid` di `index.html` dan menaruh foto di `assets/images/`.

## Mengubah tanggal
Tanggal ulang tahun ditetapkan pada 29 November 2026. Jika ingin mengubahnya, edit baris `const birthday = new Date(2026, 10, 29, 0, 0, 0);` di `js/script.js`.
Catatan: indeks bulan JavaScript dimulai dari 0, sehingga November adalah 10.

## Publikasi
Website ini berupa static site. Folder project dapat dipublikasikan melalui Netlify atau GitHub Pages.
