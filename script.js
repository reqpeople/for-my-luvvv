
const messages = [
    "Mata lu tuh kayak punya kekuatan sendiri, ya. Bisa bikin gua lupa waktu.",
    "Gua gak tahu gimana, tapi mata lu tuh ngasih vibe yang gua banget.",
    "Serius deh, setiap gua liat mata lu, gua merasa kayak di tempat yang paling nyaman.",
    "Lu pernah sadar ga sih, mata lu bisa ngomong lebih banyak dari kata-kata?",
    "Mata lu tuh simpel, tapi bisa bikin hari gua lebih baik setiap kali ngeliatnya.",
    "POKONYA MAH LOPP YUUUU PULLL"
];


let i = 0;

function nextPopup() {
    i++;
    if (i < messages.length) {
        document.getElementById("popupText").innerText = messages[i];
    } else {
        // Menyembunyikan popup dan menampilkan halaman pertanyaan
        document.getElementById("popup").classList.remove("active");
        document.getElementById("questionPage").classList.add("active");
    }
}

// Fungsi untuk memindahkan tombol "Tidak"
function moveNoBtn() {
    const btn = document.getElementById("noBtn");
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// Fungsi untuk melanjutkan ke halaman galeri
function goToGallery() {
    document.getElementById("questionPage").classList.remove("active");
    document.getElementById("galleryPage").classList.add("active");
}

// Fungsi untuk otomatis memindahkan galeri ke gambar berikutnya (slide)
const gallery = document.querySelector(".gallery");
let currentIndex = 0;

function autoSlide() {
    const images = gallery.querySelectorAll("img");
    const totalImages = images.length;

    // Slide ke gambar berikutnya
    currentIndex++;

    if (currentIndex >= totalImages) {
        currentIndex = 0; // Kembali ke gambar pertama setelah mencapai yang terakhir
    }

    // Memindahkan posisi galeri untuk menampilkan gambar selanjutnya
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Menggunakan setInterval untuk memicu auto-slide setiap 3 detik
let slideInterval = setInterval(autoSlide, 3000);

// Jika kamu ingin menghentikan slide, kamu bisa menggunakan:
// clearInterval(slideInterval);
