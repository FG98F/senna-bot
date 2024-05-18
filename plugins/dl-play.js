
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* Lil Peep hate my life`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧') 
  let play = `
	≡ *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*
┌──────────────
▢ 📌 *${mssg.العنوان}:* ${vid.العنوان}
▢ 📆 *${mssg.تم الحميل}:* ${vid.تم التحميل}
▢ ⌚ *${mssg.المدة}:* ${vid.المدة}
▢ 👀 *${mssg.المشاهدات}:* ${vid.المشاهدات.toLocaleString()}
└──────────────`
 await conn.sendButton2(m.chat, play, mssg.ig, thumbnail, [
    ['🎶 صوت', `${usedPrefix}fgmp3 ${url}`],
    ['🎥 فيديو', `${usedPrefix}fgmp4 ${url}`]
  ], null, [['Canal', `${fgcanal}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid', 'شغل']
handler.disabled = false

export default handler
