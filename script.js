const messages = [
    "Hai kamu~",
    "Aku tau hari ini kamu capek banget, apalagi harus lembur 😔",
    "Tapi aku bangga sama kamu yang tetap semangat dan bertanggung jawab 💪💕",
    "Aku cuma mau bilang...",
    "Aku minta maaf ya...",
    "Aku tau aku udah bikin kamu ngerasa gak nyaman akhir-akhir ini...",
    "Tapi aku benar-benar sayang dan gak mau kehilangan kamu 😢",
    "Makasih udah mau dengerin aku sejauh ini 🥺",
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
