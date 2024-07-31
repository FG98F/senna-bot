import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) return m.reply(`*✓┃🚫┃حط اسم الانمي الي تبي تبحث عنه ✓*`)
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'es', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'es', autoCorrect: true })   
let AnimeInfo = `
🎀 • *الاسم:* ${result.title}
🎋 • *شكل:* ${result.type}
📈 • *ولاية:* ${result.status.toUpperCase().replace(/\_/g, " ")}
🍥 • *عدد الحلقات:* ${result.episodes}
🎈 • *مدة: ${result.duration}*
✨ • *مقتبس من:* ${result.source.toUpperCase()}
💫 • *اول عرض:* ${result.aired.from}
🎗 • *تم الانتهاء:* ${result.aired.to}
🎐 • *الشعبية:* ${result.popularity}
🎏 • *المفضلة:* ${result.favorites}
🎇 • *التصنيف:* ${result.rating}
🏅 • *المركز:* ${result.rank}
♦ • *التيلر:* ${result.trailer.url}
🌐 • *ع انمي ليست:* ${result.url}
🎆 • *لمحة:* ${resultes.text}
❄ • *سيرة:* ${resultes2.text}`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
} catch {
throw `*❮❗️┊الامر معطل للوقت الحالي،سيتم اعادته في اقرب وقت ممكن.❯*`  
}}
handler.command = /^(anime|انمي)$/i
export default handler 
