let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*「✧|─────✦❯◇❮✦─────|✧」*\n*〖❗تحذير ادخل مشكلتك و بلاغك〗*\n\n*˼‏❖˹┇⇠『مثال:』* \n*${usedPrefix + command} لقد تم حظري من البوت ${usedPrefix} بدون اي سبب*\n*「✧|────✦❯◇❮✦────|✧」*`
if (text.length < 10) throw `*〄↞┇❗تحذير البلاغ لا يقل عن عشرة احرف❗┇*`
if (text.length > 1000) throw `*〄↞┇❗تحذير البلاغ لا يزيد عن الف حرف❗┇*`
let teks = `*「✧|────✦❯◇❮✦────|✧」*\n*[إبلاغ مهم]*\n*┬*\n*├❧ الرقم:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ البلاغ:* ${text}\n*┴*`
conn.reply('201028085788@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*\n*〖تم إبلاغ المطور و انشاء الله يكون ف خدمتك في أسرع وقت〗*\n*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|بلاغ|بلغ|ابلاغ|bug|report-owner|reportes)$/i
export default handler
