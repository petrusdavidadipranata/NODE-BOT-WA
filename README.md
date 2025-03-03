# WhatsApp OTP Verification

Proyek ini memungkinkan verifikasi OTP untuk nomor WhatsApp melalui halaman web sederhana. Pengguna memasukkan nomor WhatsApp, menerima OTP, dan kemudian memverifikasi OTP yang dimasukkan untuk melakukan autentikasi.

## Fitur
- Kirim OTP ke nomor WhatsApp
- Verifikasi OTP yang dikirimkan
- Tampilan sederhana dengan input nomor dan OTP

## Teknologi yang Digunakan
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (untuk mengirim OTP)
- **API**: Restful API untuk mengirim OTP

## Persyaratan Sistem
Sebelum menjalankan proyek ini, pastikan Anda sudah menginstal perangkat lunak berikut:
- [Node.js](https://nodejs.org/) (termasuk npm)

## Instalasi dan Cara Menjalankan

### 1. Persiapkan Backend (Node.js)

#### a. Clone repository ini:
```bash
git clone <URL_REPOSITORY>
cd <folder_proyek>
npm install
npm start
'🚀 Server berjalan di http://localhost:3000'
'Scan QR ini untuk masuk ke WhatsApp:
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▄▀  ▀   ▀▄████▄▀ ▄█▀█▄   ▀█▀▀▄█▀ ▄▄▀▀ ▄ ██ ▄▄▄▄▄ █
█ █   █ █ ▀▀▄█▄▄█▄▀ ██ █   █▄▄██▀█▄▄▀ ▄██▄ ▀ █▀▄ ██ █   █ █
█ █▄▄▄█ █▄ ▄▀▀ ▀▀▀▄  ▀▀▄ █▀ ▄▄▄ ▀▄▄██ █   ▀█ ▄▄▀▄██ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄█▄▀▄█▄█▄▀▄▀▄█ ▀▄█ █▄█ ▀ ▀ █ ▀▄█▄▀ █ █ █ █▄▄▄▄▄▄▄█
█▄▄  ▀▀▄█  ▄▄ ▀▀██ ▀▀▄ ▄▀ ▀▄▄    █ ▄▀█▀█ ▄▀▀▀▀▄▄▀  ██ ▄ ▀ █
█▄▄▄▄██▄▄▄ ██  ▀   ██ ▄▄▄▄███▄▀▀█ █ ▀ ▀▀▀ █▀ ▀ ▀██▀▀██ ▄█ █
██ ▀ ▄▄▄▄▀▄▀█▀▄ █▄█▄ ▀█▄▄█▄▄█▀█▀ ▀▀█  ▀ ▀▀██▄▀ ███ ▀█▀█  ▄█
█▄▀▄▀█▀▄ █▄▀▀  ████▀█▀  ██ ▄ ▄█▀███▄   ▀▀▄ ▀  █▄▄█▄▄▄▀▀▀███
█▀▄▄█▄▀▄ █▄▀▀▀  ▀▀█▀ █ ▀ ▄▄▄▄▄ ▄ ▄▄▀▀▀█▄ █▀█▄▄ ▀█▄██ █▄▀▀▀█
█▄▄█▄ ▀▄▄▀▀▀▀▀▀▀█▀▀█▀█▀  ▄█ ▀ ▀  █▀▄  █ ▀ ▄▄▀▄▀  ▀▀▄▄▀▄▄▄██
█▄█ ██▄▄▀█▄▀ █ ██ ▄███  ▀█▀ █ ▀  ▀██▀▀ █▀ ▀▀ ██▄▄  █▄ ▀   █
█▄█▀▀▀▄▄▀▀▄██▀█▄▀▄█▀ ▄▀   █▀█▀▄▀▀▄ ██ ▀ ▀▄▄▀▀█  ▀█▄█▀▀ ██ █
█▄█▀ █▄▄▄▄▀▄█ ▀▀▀▄▄ █ ▀█ ██▀█▀█▄▄▄▄█  ▄ ███▄▄█▀███  ██▀█▄ █
██  █ ▄▄▄ █ ▄█▀  ▀▄▄▀▀█▄    ▄▄▄ █ ▄▀▄██ ▄▄█▀  ██▄ ▄▄▄ ▀▀█▀█
█▄▀▀▄ █▄█   ▄ █▄▄ █▄██▀▀ ▄█ █▄█  ▄▀ █▀█▄ ▀▀▄▄▄  █ █▄█  █  █
█▀█▀▄▄▄▄ ▄████   █▀██▀▄ ▄▀  ▄▄  ▀█▀▀▄ ▀▀█ ▀█▄███▄   ▄▄██▄██
█  ██ ▄▄▀█  ▀ █▀ █ █ █ ▄▀▀▄█▄█▀▀▄▀ ▄ █▀█▀  ▀███▄███ █▄▄████
█ █████▄▀▄█▄▄▄ █   ▀██▀ ▀▄█▀▄█ █▀▄█▄█ ▀  ▄▄▀  ▄▄ ▀▄▄ ▀ █ ▄█
█▄  ▀▀▄▄██ ▀▄▀█▄██  ▀██▀ ▄█▀██▄ ▄█ ▄▄ ▀ ██ ▄ █ █▀█▄██▄▀▄█▄█
██▀▀▄▄█▄  ▀ █▀█  ▄ ▀  ▄ ▄▀█▄ ▄ ▀▀█▀█▄██ ▄  ▄▄▀▄ ██▀█▄▀▀ █▄█
███▄█▀ ▄▀▀ █▀ ▀▀▀▀█▀ █▄█▀▄▀ ▀ █▀█▄▄▀██▄▄▄███▄▄ ▀ ▄▄▄▀ █▄█ █
█▄▀▀▄▄▀▄▀▄▀▄ ▄███▄█▄▄██ ▄█▀█▀▄▄ ▀█ █▄ ▀ ▄█ ▀█ ▄ ▀ ▄▀▀▄▄▄ ▀█
███ ▄▀█▄ █▄ ▄▀██▄▄▀▀▀▄ ██ ▄▀▄██ ██ ██▀▀█▄▄ ▀█▀██▀▄ ▀▄▄▄ ▄▀█
█ ▀ ▀▀▄▄█▄▄▄█▀▀ ▀▀██  ▄█▀█▀▀▄ ██▄▀▀▄▄▄█▀▄██▀▀▀▄▄█▀ ▄ ▄▀▄▄ █
███████▄▄▀█▄▄▀▀▀ █▄▄▄ █▀▄█  ▄▄▄ █▀▄█▄▄▀▀███▄▄▀ ▄▀ ▄▄▄ ▀▄▄██
█ ▄▄▄▄▄ ███ █ ▀▄▄▄▀  █▀█▄▀▄ █▄█ ▄▄▄███▀▄█▀██▀█ █  █▄█ ▀ █▀█
█ █   █ █▀█▀█▄ ▄▀█▀█ ▄▀█ ▀   ▄  ▄  ▀██▄▄ ▀ █  ▀ ▄▄▄▄  ▄  ▄█
█ █▄▄▄█ █ ▀▀▄▀▄█  ▄▄▄▀█ █▀█ █▀█▀█  ▀█▀▄▀████ █ █  █▀▀▀███▀█
█▄▄▄▄▄▄▄█▄▄█▄▄██▄▄▄█▄█▄▄▄███▄▄███▄█████▄▄▄▄█▄██▄▄██▄█▄█▄███'
'Scan QR yang ada di terminal'
'Bot whatsapp sudah aktif'
run live server


