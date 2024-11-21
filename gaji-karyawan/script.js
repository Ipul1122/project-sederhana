document.getElementById('gajiForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Ambil nilai input
    const nama = document.getElementById('nama').value;
    const golongan = document.getElementById('golongan').value;
    const jamKerja = parseInt(document.getElementById('jamKerja').value);
  
    // Tentukan upah per jam berdasarkan golongan
    const upahPerJam = {
      A: 5000,
      B: 7000,
      C: 8000,
      D: 10000
    };
  
    // Hitung gaji
    const jamNormal = 48;
    const upahLembur = 4000;
  
    let gajiPokok = 0;
    let gajiLembur = 0;
  
    if (jamKerja > jamNormal) {
      gajiPokok = jamNormal * upahPerJam[golongan];
      gajiLembur = (jamKerja - jamNormal) * upahLembur;
    } else {
      gajiPokok = jamKerja * upahPerJam[golongan];
    }
  
    const totalGaji = gajiPokok + gajiLembur;
  
    // Tampilkan hasil
    document.getElementById('namaHasil').textContent = `Nama Karyawan: ${nama}`;
    document.getElementById('gajiHasil').textContent = `Gaji Mingguan: Rp ${totalGaji.toLocaleString()}`;
  });
  