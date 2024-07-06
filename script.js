document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menghitung total harga berdasarkan jenis bahan bakar dan jumlah liter
    function hitungTotalHarga() {
        const jenisBB = document.getElementById('jenis_bb').value;
        const liter = parseFloat(document.getElementById('liter').value);
        let hargaPerLiter = 0;

        switch (jenisBB) {
            case 'Premium':
                hargaPerLiter = 7650;
                break;
            case 'Pertalite':
                hargaPerLiter = 10000;
                break;
            case 'Pertamax':
                hargaPerLiter = 13300;
                break;
            case 'Solar':
                hargaPerLiter = 6800;
                break;
        }

        const totalHarga = liter * hargaPerLiter;
        document.getElementById('total_harga').value = Math.round(totalHarga);
    }

    // Event listener untuk perubahan pada jenis bahan bakar dan jumlah liter
    document.getElementById('jenis_bb').addEventListener('change', hitungTotalHarga);
    document.getElementById('liter').addEventListener('input', hitungTotalHarga);

    // Validasi form sebelum submit
    document.querySelector('form').addEventListener('submit', function(e) {
        const tanggal = document.getElementById('tanggal').value;
        const waktu = document.getElementById('waktu').value;
        const jenisBB = document.getElementById('jenis_bb').value;
        const liter = document.getElementById('liter').value;
        const totalHarga = document.getElementById('total_harga').value;

        if (!tanggal || !waktu || !jenisBB || !liter || !totalHarga) {
            e.preventDefault();
            alert('Semua field harus diisi!');
        }
    });

    // Set tanggal dan waktu saat ini sebagai nilai default
    const now = new Date();
    document.getElementById('tanggal').valueAsDate = now;
    document.getElementById('waktu').value = now.toTimeString().slice(0,5);
});