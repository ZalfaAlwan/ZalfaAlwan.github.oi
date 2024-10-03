// Ambil elemen yang diperlukan
const absenForm = document.getElementById("absenForm");
const absenList = document.getElementById("absenList");
let absenData = [];
let nomorAbsen = 1;

// Tambahkan event listener untuk submit form absensi
absenForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form refresh otomatis
    
    // Ambil nilai input
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;

    // Ambil waktu sekarang
    let waktuAbsen = new Date().toLocaleString();

    // Tambahkan data ke dalam array absenData
    absenData.push({ nomor: nomorAbsen, nama: nama, kelas: kelas, waktu: waktuAbsen });
    
    // Tambahkan data ke dalam tabel absensi
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${nomorAbsen}</td>
        <td>${nama}</td>
        <td>${kelas}</td>
        <td>${waktuAbsen}</td>
    `;
    absenList.appendChild(newRow);

    // Naikkan nomor absen
    nomorAbsen++;

    // Reset form setelah submit
    absenForm.reset();
});