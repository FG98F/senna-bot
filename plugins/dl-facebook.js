
import fg from 'api-dylux';
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  
if (!args[0]) throw `✳️ ${mssg.noLink('Facebook')}\n\n📌 ${mssg.example} :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
  m.react(rwait)

  try {
    let res = await fetch(global.API('fgmods', '/api/downloader/fbdl', { url: args[0] }, 'apikey'))
    let data = await res.json()
    
    conn.sendFile(m.chat, data.result.HD, 'fb.mp4', `✅ ${mssg.result}`, m)
    m.react(done)
  } catch (error) {
    m.reply(mssg.error)
  }
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = true

export default handler
