const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Konfigurasi Google Gemini AI
const genAI = new GoogleGenerativeAI("AIzaSyD27VpBDVwbz1zbtq4QmoQtYegvgE0ypWM"); // Ganti dengan kunci API Anda
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: "Yo, gue ASISTEN_DAV, bot kece punya Petrus David Adi Pranata. Kalau doi lagi nggak bisa bales, serahin aja ke gue. Gue bakal jawab semua pesan dengan gaya anak muda kekinian."     
}); // Atau model lain yang sesuai

// Inisialisasi WhatsApp bot
const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('qr', qr => {
    console.log(" ");
    
    console.log('Scan QR ini untuk masuk ke WhatsApp:');
    qrcode.generate(qr, { small: true });

    console.log("CODE AKAN BERGANTI SELAMA 30 DETIK");
    
});

client.on('ready', () => {
    console.log('✅ Bot WhatsApp sudah aktif!');
});

client.on('message', async message => {
    const userSession = message.from;
    const userMessage = message.body.trim();

    console.log(`[${userSession}] Pesan dari pengguna: ${userMessage}`);

    if (userMessage.toLowerCase() === 'exit') {
        message.reply('Bot telah berhenti. Sampai jumpa!');
        client.logout(); // Keluar dari sesi WhatsApp
        return;
    }

    try {
        const response = await model.generateContent({
            contents: [
                {
                    role: 'user',
                    parts: [{ text: userMessage }],
                },
            ],
        });

        console.log("Response from Gemini AI:", JSON.stringify(response, null, 2)); // Log respons lengkap

        // Perubahan penting di sini: akses response.response.candidates
        const aiReply = response.response?.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak bisa menjawab itu.";

        message.reply(`${aiReply}`);
    } catch (error) {
        console.error(`❌ [${userSession}] Terjadi kesalahan:`, error);
        message.reply("⚠️ Maaf, terjadi kesalahan dalam memproses pesan. Silakan coba lagi nanti.");
    }
});

client.initialize();