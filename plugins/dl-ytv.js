
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ ${mssg.example} :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `❎ ${mssg.noLink('YouTube')}`
	 let chat = global.db.data.chats[m.chat]
	 m.react(rwait) 
	
	 let q = args[1] || '360p'
 try {
 	  const yt = await fg.ytmp4(args[0], q)
  let { title, size, sizeB, dl_url, quality } = yt
  
  let isLimit = limit * 1024 < sizeB 
  m.reply(` ${isLimit ? `≡  *FG YTDL*\n\n▢ *⚖️${mssg.size}*: ${size}\n▢ *🎞️${mssg.quality}*: ${q}\n\n▢ _${mssg.limitdl}_ *+${limit} MB**` : global.wait }  `)
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp3', `
 ≡  *FG YTDL*
  
▢ *📌${mssg.title}* : ${title}
*🎞️${mssg.quality}:* ${quality}
▢ *⚖️${mssg.size}* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done)
 	} catch {
 	
	try {
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		
       if (size.split('MB')[0] >= limit) return m.reply(` ≡  *FG YTDL*\n\n▢ *⚖️${mssg.size()}*: ${size}\n▢ *🎞️${mssg.quality()}*: ${q}\n\n▢ _${mssg.limitdl()}_ *+${limit} MB*`) 
	   if (size.includes('GB')) return m.reply(` ≡  *FG YTDL*\n\n▢ *⚖️${mssg.size()}*: ${size}\n▢ *🎞️${mssg.quality()}*: ${q}\n\n▢ _${mssg.limitdl()}_ *+${limit} MB*`)   
	  conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *FG YTDL*
  
*📌${mssg.title}:* ${title}
*🎞️${mssg.quality}:* ${q}
*⚖️${mssg.size}:* ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
		
	} catch {
		await m.reply(`❎ ${mssg.error}`)
	}
		} 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'fgmp4']
handler.diamond = false

export default handler
