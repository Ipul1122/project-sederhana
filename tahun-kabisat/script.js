document.getElementById('leapYearForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form refresh halaman
    const year = parseInt(document.getElementById('yearInput').value);
    const result = document.getElementById('result');
  
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
      result.textContent = `Tahun ${year} merupakan TAHUN KABISAT.`;
      result.style.color = 'green';
    } else {
      result.textContent = `Tahun ${year} bukan merupakan TAHUN KABISAT.`;
      result.style.color = 'red';
    }
  });
  