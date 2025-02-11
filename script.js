const serverURL = "http://localhost:3000";

document.getElementById("phone").addEventListener("input", function(e) {
    // Ambil nilai input
    let phone = e.target.value;

    // Cek jika input tidak dimulai dengan "628", tambahkan awalan "628"
    if (!phone.startsWith("628")) {
        phone = "628" + phone.substring(3); // Sisipkan 628 di depan
    }

    // Set input value kembali dengan awalan 628
    e.target.value = phone.slice(0, 13); // Maksimal panjang 13 karakter (termasuk 628)
});

async function sendOTP() {
    const phone = document.getElementById("phone").value;
    
    if (!phone) {
        alert("Masukkan nomor WhatsApp!");
        return;
    }

    const response = await fetch(`${serverURL}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone })
    });

    const data = await response.json();
    document.getElementById("message").innerText = data.message;

    if (response.ok) {
        document.getElementById("otpSection").style.display = "block";
        localStorage.setItem("otp", data.otp); // Simpan OTP untuk simulasi verifikasi

        // Menonaktifkan tombol dan mulai timer
        disableSendOTPButton();
        startTimer();
    }
}

function verifyOTP() {
    const inputOTP = document.getElementById("otp").value;
    const storedOTP = localStorage.getItem("otp");

    if (inputOTP === storedOTP) {
        alert("✅ OTP BERHASIL!");
    } else {
        alert("❌ OTP SALAH!");
    }
}

// Menonaktifkan tombol "Kirim OTP" dan mengaktifkan kembali setelah 1 menit
function disableSendOTPButton() {
    const sendOTPButton = document.getElementById("sendOTPButton");
    sendOTPButton.disabled = true; // Nonaktifkan tombol

    // Setelah 1 menit (60 detik), aktifkan kembali tombol
    setTimeout(() => {
        sendOTPButton.disabled = false; // Aktifkan kembali tombol
    }, 60000); // 60000 ms = 1 menit
}

// Menampilkan timer mundur
function startTimer() {
    const timerElement = document.getElementById("timer");
    let timeLeft = 60; // Waktu 60 detik (1 menit)

    // Update timer setiap detik
    const timerInterval = setInterval(() => {
        timerElement.innerText = `Tunggu ${timeLeft} detik sebelum mengirim OTP lagi.`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval); // Berhenti setelah waktu habis
            timerElement.innerText = "";
        }
    }, 1000);
}
