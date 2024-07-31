import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {

 let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 الجروب لا يدعم محتوى +18\n\nلتفعيل اكتب\n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 15) throw `😐 انت أصغر من السن المسموح! ارجع لما يكون عندك أكثر من 15 سنة`
  if (!text) throw `✳️ للبحث\n📌 استخدم : *${usedPrefix + command} <البحث>*\n\nللتنزيل من URL:\n📌استخدم : *${usedPrefix + command} <الرابط>*`
    
    m.react('🥵') 
    if (text.includes('http://') || text.includes('https://')) {
        if (!text.includes('xnxx.com')) return m.reply(`❎ أدخل رابطا *xnxx.com*`)
        try {
            let xn = await fg.xnxxdl(text)
            conn.sendFile(m.chat, xn.result.files.high, xn.result.title + '.mp4', `
 ≡  *تنزيل من xnxx*

🔸️ *📌 العنوان*: ${xn.result.title}
🔸️ *⌚ المدة:* ${xn.result.duration}
🔸️ *🎞 ️الجودة:* ${xn.result.quality}
`.trim(), m, false, { asDocument: chat.useDocument })
 m.react(done)
 } catch (e) {
    m.reply(`🔴 خطأ: حاول مرة أخرى لاحقًا`)
 }
    } else {
        try {
            let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *عنوان* : ${v.title}\n*لينك:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
            } catch (e) {
              m.reply(`❌️ خطأ: حاول البحث بكلمة أخرى`)
               }
    }
}
handler.help = ['سككس'] 
handler.tags = ['nsfw']
handler.command = ['سككس', 'xnxxdl'] 
handler.diamond = 2
handler.premium = false

export default handler