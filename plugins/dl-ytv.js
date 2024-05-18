
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
		const yt = await fg.ytv(args[0], q)
		let { title, dl_url, quality, size, sizeB } = yt
        let isLimit = limit * 1024 < sizeB 

     await conn.loadingMsg(m.chat, '📥 جاري التحميل', ` ${isLimit ? `≡  *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*\n\n▢ *⚖️${mssg.size}*: ${size}\n▢ *🎞️${mssg.quality}*: ${quality}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : '✅ تم التحميل' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
     
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*
  
*📌${mssg.title}:* ${title}
*🎞️${mssg.quality}:* ${quality}
*⚖️${mssg.size}:* ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
 	} catch {
 	
	try {
	let yt = await fg.ytmp4(args[0], q)
    let { title, size, sizeB, dl_url, quality } = yt
  
  let isLimit = limit * 1024 < sizeB 
 
  await conn.loadingMsg(m.chat, '📥 جاري التحميل', ` ${isLimit ? `≡  *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*\n\n▢ *⚖️${mssg.size}*: ${size}\n▢ *🎞️${mssg.quality}*: ${quality}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : '✅ تم التحميل' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
	  
if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*
  
▢ *📌${mssg.title}* : ${title}
*🎞️${mssg.quality}:* ${quality}
▢ *⚖️${mssg.size}* : ${size}
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
