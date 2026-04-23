
    // Data anggota awal (statis)
    const anggotaData = [
      { nama: "Andi Prasetyo", email: "andi@email.com", minat: "Web Development" },
      { nama: "Sari Dewi", email: "sari@email.com", minat: "UI/UX Design" },
      { nama: "Budi Santoso", email: "budi@email.com", minat: "Data Science" },
      { nama: "Rina Lestari", email: "rina@email.com", minat: "Cybersecurity" },
      { nama: "Dika Firmansyah", email: "dika@email.com", minat: "Mobile Development" },
    ];

    const badgeClass = {
      "Web Development": "",
      "UI/UX Design": "purple",
      "Data Science": "blue",
      "Cybersecurity": "",
      "Mobile Development": "purple",
      "Game Development": "blue",
      "DevOps": "",
      "Machine Learning": "blue",
    };

    function renderTable() {
      // Merge data statis + data dari sessionStorage
      let tambahan = [];
      try { tambahan = JSON.parse(sessionStorage.getItem('anggotaBaru') || '[]'); } catch(e){}
      const semua = [...anggotaData, ...tambahan];

      document.getElementById('totalAnggota').textContent = semua.length;
      const tbody = document.getElementById('anggotaBody');
      tbody.innerHTML = '';

      semua.forEach((a, i) => {
        const cls = badgeClass[a.minat] || '';
        tbody.innerHTML += `
          <tr>
            <td style="font-family:var(--mono);color:var(--muted);font-size:0.78rem">${String(i+1).padStart(2,'0')}</td>
            <td><strong>${a.nama}</strong></td>
            <td style="font-family:var(--mono);font-size:0.82rem;color:var(--muted)">${a.email}</td>
            <td><span class="badge ${cls}">${a.minat}</span></td>
          </tr>`;
      });
    }

    renderTable();
 