 
import fetch from 'node-fetch'
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `✳️ ${mssg.useCmd}\n *${usedPrefix + command}* https://www.instagram.com/p/CYHeKxyMj-J/?igshid=YmMyMTA2M2Y=`
    m.react(rwait)

   let res = await fetch(global.API('fgmods', '/api/downloader/igdl', { url: args[0] }, 'apikey'))
   let resdl = res.json()
    for (let data of resdl.result) {
    conn.sendFile(m.chat, data.url, 'igdl.mp4', `✅ ${mssg.result}`, m)
    m.react(done)
  }
}
handler.help = ['instagram <link ig>']
handler.tags = ['dl']
handler.command = ['ig', 'igdl', 'instagram', 'igimg', 'igvid'] 
handler.diamond = true

export default handler 
