const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', qr => {
    console.log('Scan QR ini untuk masuk ke WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot WhatsApp sudah aktif!');
});

client.initialize();

const generateOTP = () => Math.floor(100000 + Math.random() * 900000);
let otpStorage = {}; // Menyimpan OTP sementara

app.get('/', (req, res) => {
    res.send('🚀 Server WhatsApp OTP berjalan!');
});

app.post('/send-otp', async (req, res) => {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ message: "Nomor WhatsApp diperlukan" });

    const otp = generateOTP();
    otpStorage[phone] = otp;
    const message = `Kode OTP Anda adalah: ${otp}. Jangan bagikan dengan siapa pun.`;

    try {
        const formattedNumber = `${phone}@c.us`;
        await client.sendMessage(formattedNumber, message);
        console.log(`OTP ${otp} berhasil dikirim ke ${phone}`);
        res.json({ message: "OTP berhasil dikirim!", otp });
    } catch (error) {
        console.error("Gagal mengirim OTP:", error);
        res.status(500).json({ message: "Gagal mengirim OTP" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
