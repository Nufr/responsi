<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil data dari form
    $tanggal = $_POST['tanggal'];
    $waktu = $_POST['waktu'];
    $jenis_bb = $_POST['jenis_bb'];
    $liter = $_POST['liter'];
    $total_harga = $_POST['total_harga'];

    // Membuat string data yang akan disimpan
    $data = "Tanggal: $tanggal\n";
    $data .= "Waktu: $waktu\n";
    $data .= "Jenis Bahan Bakar: $jenis_bb\n";
    $data .= "Jumlah Liter: $liter\n";
    $data .= "Total Harga: $total_harga\n";
    $data .= "------------------------\n";

    // Menyimpan data ke file txt
    $file = 'transaksi.txt';
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

    // Redirect kembali ke halaman utama
    header("Location: index.html");
    exit();
} else {
    // Jika bukan metode POST, redirect ke halaman utama
    header("Location: index.html");
    exit();
}
?>