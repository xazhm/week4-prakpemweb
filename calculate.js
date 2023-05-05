

function calculate() {
    var barang1 = document.getElementById("barang1").value;
    var barang2 = document.getElementById("barang2").value;
    var barang3 = document.getElementById("barang3").value;
    var barang4 = document.getElementById("barang4").value;

    var jumlahbarang1 = parseFloat(document.getElementById("jumlahbarang1").value);
    var jumlahbarang2 = parseFloat(document.getElementById("jumlahbarang2").value);
    var jumlahbarang3 = parseFloat(document.getElementById("jumlahbarang3").value);
    var jumlahbarang4 = parseFloat(document.getElementById("jumlahbarang4").value);

    var hargabarang1 = parseFloat(document.getElementById("hargabarang1").value);
    var hargabarang2 = parseFloat(document.getElementById("hargabarang2").value);
    var hargabarang3 = parseFloat(document.getElementById("hargabarang3").value);
    var hargabarang4 = parseFloat(document.getElementById("hargabarang4").value);

    var totalnya = ((jumlahbarang1 * hargabarang1) + (jumlahbarang2 * hargabarang2) + (jumlahbarang3 * hargabarang3) + (jumlahbarang4 * hargabarang4));

    var hasil_perhitungan = "Nama Barang 1: " + barang1 + "<br>" +
        "Jumlah Barang 1: " + jumlahbarang1 + "<br>" +
        "Harga Barang 1: " + hargabarang1 +

        "<hr>Nama Barang 2: " + barang2 + "<br>" +
        "Jumlah Barang 2: " + jumlahbarang2 + "<br>" +
        "Harga Barang 2: " + hargabarang2 +

        "<hr>Nama Barang 3: " + barang3 + "<br>" +
        "Jumlah Barang 3: " + jumlahbarang3 + "<br>" +
        "Harga Barang 3: " + hargabarang3 +

        "<hr>Nama Barang 4: " + barang4 + "<br>" +
        "Jumlah Barang 4: " + jumlahbarang4 + "<br>" +
        "Harga Barang 4: " + hargabarang4 +

        "<hr><center>TOTAL BELANJA: <br>" + totalnya;

    document.getElementById("hasil_perhitungan1").innerHTML = hasil_perhitungan;
}