
import fetch from 'node-fetch'
import fg from 'api-dylux';
let handler = async (m, { conn, command, args, text }) => {
      
    if (!text) return m.reply(`✳️ ${mssg.ssWeb}`)
    m.react(rwait) 
	let full = /f$/i.test(command)
    let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: url }))).buffer()
   // let ss = await fg.ssweb(url, /f$/i.test(command), args[1])
    conn.sendFile(m.chat, ss, 'ssweb.png', `✅ ${mssg.result}`, m) 
   m.react(done) 
}
handler.help = ['ssweb <url>']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss', 'captura', 'ssf', 'sswebf'] 

export default handler
