
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ ${mssg.example} :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
  if (!args[0].match(/youtu/gi)) throw `❎ ${mssg.noLink('YouTube')}`
   m.react(rwait)
 let chat = global.db.data.chats[m.chat]
 let q = '128kbps'
 try {
 	  const yt = await fg.ytmp3(args[0])
  let { title, size, sizeB, dl_url } = yt
		conn.sendFile(m.chat, dl_url, title + '.mp3', `
 ≡  *FG YTDL*
  
▢ *📌${mssg.title}* : ${title}
▢ *⚖️${mssg.size}* : ${size}
`.trim(), m, false, { mimetype: 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done)
 	} catch {
  try {
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
		const dl_url = await yt.audio[q].download()
		const title = await yt.title
		const size = await yt.audio[q].fileSizeH
		conn.sendFile(m.chat, dl_url, title + '.mp3', `
 ≡  *FG YTDL*
  
▢ *📌${mssg.title}* : ${title}
▢ *⚖️${mssg.size}* : ${size}
`.trim(), m, false, { mimetype: 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done)
        } catch {
			await m.reply(`❎ ${mssg.error}`)
} 
}

}
handler.help = ['ytmp3 <url>']
handler.tags = ['dl']
handler.command = ['ytmp3', 'fgmp3'] 
handler.diamond = false

export default handler
