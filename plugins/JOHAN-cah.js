import fs from 'fs';

let data = JSON.parse(fs.readFileSync('./src/game/cah.json'));

let handler = async (m, { conn }) => {
    let randomIndex = Math.floor(Math.random() * data.length);
    let question = data[randomIndex].question;
    let message = `خمن من هذي شخصية: ${question}`;
    conn.sendFile(m.chat, 'https://telegra.ph/file/caafdb2292db8180b99fe.mp4', 'video.mp4', message, m);
};

handler.customPrefix = /^(تخمين|خمن)$/i;
handler.command = new RegExp;

export default handler;
