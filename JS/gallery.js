    // GAMBAR
    const images = [
      {
        url: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=900&auto=format&fit=crop&q=80",
        caption: "Tech workspace modern — tempat inspirasi & kolaborasi"
      },
      {
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80",
        caption: "Tim developer bekerja sama membangun solusi digital"
      },
      {
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=80",
        caption: "Hackathon & workshop komunitas teknologi"
      },
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop&q=80",
        caption: "Coding session — belajar bersama lebih menyenangkan"
      },
    ];

    let imgIndex = 0;

    function gantiGambar() {
      imgIndex = (imgIndex + 1) % images.length;
      const el = document.getElementById('galleryImg');
      el.style.opacity = '0';
      setTimeout(() => {
        el.src = images[imgIndex].url;
        document.getElementById('imgCaption').textContent = images[imgIndex].caption;
        el.style.opacity = '1';
      }, 300);
    }

    function infoGambar() {
      alert(`📷 Info Gambar\n\nJudul: ${images[imgIndex].caption}\nSumber: Unsplash (unsplash.com)\nIndeks: ${imgIndex + 1} dari ${images.length}`);
    }

    function resetGambar() {
      imgIndex = 0;
      const el = document.getElementById('galleryImg');
      el.style.opacity = '0';
      setTimeout(() => {
        el.src = images[0].url;
        document.getElementById('imgCaption').textContent = images[0].caption;
        el.style.opacity = '1';
      }, 300);
    }

    // SOUND.
    const audio = document.getElementById('audioPlayer');
    const status = document.getElementById('audioStatus');

    function playAudio() {
      audio.play();
      status.textContent = '▶ Sedang diputar';
      status.style.color = 'var(--accent)';
    }

    function pauseAudio() {
      audio.pause();
      status.textContent = '⏸ Dijeda';
      status.style.color = 'var(--muted)';
    }

    function stopAudio() {
      audio.pause();
      audio.currentTime = 0;
      status.textContent = '⏹ Dihentikan';
      status.style.color = 'var(--muted)';
    }

    function setVolume(val) {
      audio.volume = parseFloat(val);
    }

    audio.addEventListener('ended', () => {
      status.textContent = '✓ Selesai';
      status.style.color = 'var(--accent)';
    });
  