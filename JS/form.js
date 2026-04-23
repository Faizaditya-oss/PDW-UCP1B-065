
    // Array penyimpanan sementara
    let anggotaBaru = [];

    // Ambil data dari sessionStorage jika ada
    try {
      anggotaBaru = JSON.parse(sessionStorage.getItem('anggotaBaru') || '[]');
    } catch(e) {}

    function submitForm() {
      const nama  = document.getElementById('nama').value.trim();
      const email = document.getElementById('email').value.trim();
      const minat = document.getElementById('minat').value;

      if (!nama || !email || !minat) {
        alert('⚠️ Semua field wajib diisi!');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('⚠️ Format email tidak valid!');
        return;
      }

      const anggota = { nama, email, minat };
      anggotaBaru.push(anggota);

      // Simpan ke sessionStorage agar index.html bisa baca
      try {
        sessionStorage.setItem('anggotaBaru', JSON.stringify(anggotaBaru));
      } catch(e) {}

      // Tampilkan result box
      document.getElementById('resultGrid').innerHTML = `
        <div class="result-row">
          <span class="result-key">Nama</span>
          <span>${nama}</span>
        </div>
        <div class="result-row">
          <span class="result-key">Email</span>
          <span>${email}</span>
        </div>
        <div class="result-row">
          <span class="result-key">Minat</span>
          <span>${minat}</span>
        </div>
      `;
      const box = document.getElementById('resultBox');
      box.style.display = 'block';

      // Reset form
      document.getElementById('nama').value = '';
      document.getElementById('email').value = '';
      document.getElementById('minat').value = '';

      // Render list
      renderList();
    }

    function renderList() {
      if (anggotaBaru.length === 0) return;
      document.getElementById('listSection').style.display = 'block';
      const list = document.getElementById('memberList');
      list.innerHTML = '';
      anggotaBaru.slice().reverse().forEach(a => {
        const initials = a.nama.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
        list.innerHTML += `
          <div class="member-item">
            <div class="member-avatar">${initials}</div>
            <div class="member-info">
              <div class="member-name">${a.nama}</div>
              <div class="member-email">${a.email}</div>
            </div>
            <span class="badge">${a.minat}</span>
          </div>`;
      });
    }

    // Render data yang sudah ada saat halaman dibuka
    renderList();
  