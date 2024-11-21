function convertCurrency() {
    const input = document.getElementById("amount").value.trim();
    const currency = document.getElementById("currency").value;
    const resultElement = document.getElementById("result");
  
    if (!input) {
      resultElement.textContent = "Masukkan jumlah yang valid.";
      return;
    }
  
    // Membersihkan input dari simbol seperti Rp atau $
    const cleanInput = input
      .replace(/Rp|[^\d.]/g, "") // Menghapus "Rp" dan simbol non-numerik kecuali titik
      .replace(/\./g, ""); // Menghapus semua titik untuk ribuan
  
    const amount = parseFloat(cleanInput);
  
    if (isNaN(amount) || amount <= 0) {
      resultElement.textContent = "Masukkan jumlah yang valid.";
      return;
    }
  
    let result;
  
    // Format angka dengan titik untuk ribuan dan 2 desimal untuk Dollar
    const formatRupiah = (num) => num.toLocaleString("id-ID", { style: "decimal", maximumFractionDigits: 0 });
    const formatDollar = (num) => num.toLocaleString("en-US", { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 });
  
    if (currency === "usd-to-idr") {
      result = amount * 15000;
      resultElement.textContent = `${formatDollar(amount)}$ = Rp${formatRupiah(result)}`;
    } else if (currency === "idr-to-usd") {
      result = amount / 15000;
      resultElement.textContent = `Rp${formatRupiah(amount)} = ${formatDollar(result)}$`;
    } else {
      resultElement.textContent = "Pilih mata uang yang valid.";
    }
  }
  