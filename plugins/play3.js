import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'هذا الامر خاص بتحميل الفيديوات على شكل mp3 من اليوتوب '
await m.reply( 'جاري تحميل mp3 المرجو الانتظار قليلا رجاء في حالة لم يقم البوت بتحميل mp3 الخاص بك  اعلم ان الفيديو طويل او ان حجمه كبير  ويمكنك مراسلة المطور للمزيد من المعلومات https://solo.to/mr_sasa')
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=85faf717d0545d14074659ad&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendFile(m.chat, lolh.result.link, `${n}.mp3`, null, m, false, { mimetype: 'audio/mp4' })    
} catch {
await conn.reply(m.chat, '*[❀] 𝙴𝚁𝚁𝙾𝚁*', m)}
}}
handler.command = /^اغنيه$/i
export default handler
