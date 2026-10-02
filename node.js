const axios = require('axios');
const { HttpsProxyAgent } = require('https-proxy-agent');

// Konfigurasi API Target (Tempat mengecek IP proksi, misal: ipify atau binance)
const API_URL = 'https://ipify.org'; 

// Konfigurasi Proksi Anda
const PROXY_HOST = '123.45.67.89';
const PROXY_PORT = '8080';
const PROXY_USER = 'username'; // Kosongkan jika tanpa autentikasi
const PROXY_PASS = 'password'; // Kosongkan jika tanpa autentikasi

// Membuat format URL Proksi
const proxyUrl = PROXY_USER && PROXY_PASS 
    ? `http://${PROXY_USER}:${PROXY_PASS}@${PROXY_HOST}:${PROXY_PORT}`
    : `http://${PROXY_HOST}:${PROXY_PORT}`;

// Inisialisasi Agen Proksi
const proxyAgent = new HttpsProxyAgent(proxyUrl);

async function checkProxy() {
    try {
        console.log('Sedang mengecek proksi...');
        
        const response = await axios.get(API_URL, {
            httpsAgent: proxyAgent,
            proxy: false, // Menonaktifkan enkapsulasi proxy bawaan axios
            timeout: 5000 // Batas waktu respons 5 detik
        });

        console.log('✅ PROKSI AKTIF!');
        console.log('IP Proksi Anda:', response.data.ip);
    } catch (error) {
        console.error('❌ PROKSI MATI ATAU EROR:', error.message);
    }
}

// Jalankan fungsi
checkProxy();
