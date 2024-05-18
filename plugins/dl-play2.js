 
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import fs from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
import os from 'os'
import fg from 'api-dylux'
import fetch from 'node-fetch'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `✳️ مثال *${usedPrefix + command}* الشيء الذي تريد تشغيله`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Vídeo/Audio no encontrado`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  let play = `
	≡ *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*
┌──────────────
▢ 📌 *العنوان:* ${vid.title}
▢ 📆 *تم التحميل:* ${vid.ago}
▢ ⌚ *المدة:* ${vid.timestamp}
▢ 👀 *المشاهدات:* ${vid.views.toLocaleString()}
└──────────────

_Enviando..._` 
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null, rcanal)
  
  let q = isVideo ? '480p' : '128kbps' 
try {
	
 // let api = await fetch(global.API('fgmods', `/api/downloader/${isVideo ? "ytv" : "yta"}`, { url: vid.url, quality: q}, 'apikey'))
 // let yt = await api.json()
  
   let yt = await (isVideo ? fg.ytv : fg.yta)(vid.url, q)
  let { title, dl_url, quality, size, sizeB } = yt
  let isLimit = limit * 1024 < sizeB 

     await conn.loadingMsg(m.chat, '📥 جاري التحميل', ` ${isLimit ? `≡  *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*\n\n▢ *⚖️الحجم*: ${size}\n▢ *🎞️الدقة*: ${quality}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : '✅ اكتمل التنزيل' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
     
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*
  
▢ *📌العنوان* : ${title}
▢ *🎞️الجودة* : ${quality}
▢ *⚖️الحجم* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
  } catch {
  try {
//  let q = isVideo ? '360p' : '128kbps' 
  let yt = await (isVideo ? fg.ytmp4 : ytmp3)(vid.url, q)
  let { title, dl_url, quality, size, sizeB} = yt
  let isLimit = limit * 1024 < sizeB 

     await conn.loadingMsg(m.chat, '📥 جاري التحميل', ` ${isLimit ? `≡  *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*\n\n▢ *⚖️الحجم*: ${size}\n▢ *🎞️الدقة*: ${quality}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : '✅ اكتمل التنزيل' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /2$/.test(command)), `
 ≡  *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*
  
*📌العنوان* : ${title}
*🎞️الدقة* : ${quality}
*⚖️الحجم* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
		
		 } catch (error) {
        m.reply(`❎ ${mssg.error}`)
    }
}

}
handler.help = ['شغل']
handler.tags = ['dl']
handler.command = ['play', 'playvid','شغل']
handler.disabled = true

export default handler

const streamPipeline = promisify(pipeline);

async function ytmp3(url) {
    const videoInfo = await ytdl.getInfo(url);
    const { videoDetails } = videoInfo;
    const { title, thumbnails, lengthSeconds, viewCount, uploadDate } = videoDetails;
    const thumbnail = thumbnails[0].url;
    
    const audioStream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });
    const tmpDir = os.tmpdir();
    const audioFilePath = `${tmpDir}/${title}.mp3`;

    await streamPipeline(audioStream, fs.createWriteStream(audioFilePath));

    return {
        title,
        views: viewCount,
        publish: uploadDate,
        duration: lengthSeconds,
        quality: '128kbps',
        thumb: thumbnail,
        size: '0mb', 
        sizeB: '0', 
        dl_url: audioFilePath
    };
}


