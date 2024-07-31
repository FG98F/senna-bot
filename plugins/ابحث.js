import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw '⚠️ *_يرجى كتابة الامر وجنبه ما تريد البحث عنه باليوتيوب_*'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
° *✦━━✤━ –⊰💧⊱– ━✤━━✦*
*↞🌐『_${v.title}_』
⎔↞┃ 🫐 *الرابط ↞* ${v.url}┃
⎔↞┃ 🕒 *الوقت ↞* ${v.timestamp}┃
⎔↞┃ 📥 *اصدر في ↞* ${v.ago}┃
⎔↞┃ 👁 *المشاهدات ↞* ${v.views}`}}).filter(v => v).join('\n\n*✦━━✤━ –⊰💧⊱– ━✤━━✦*\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ابحث', 'البحث'] 


export default handler
