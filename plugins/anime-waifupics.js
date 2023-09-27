
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react(rwait)

let type = (command).toLowerCase()

switch (type) {
	
case 'loli':
  case 'neko':
	     let loli = await conn.getFile(global.API('fgmods', `/api/img/${command}`, { }, 'apikey'))
	     //conn.sendButton(m.chat, `✅ Random ${command}`, mssg.ig, loli.data, [[`▷▷ ${mssg.next}`, `${usedPrefix + command}`]], m)
       conn.sendFile(m.chat, loli.data, 'img.jpg', `✅ ${mssg.random} *${command}*`, m)
	     m.react(dmoji) 
	break
	
case 'waifu':
case 'megumin':
  let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendFile(m.chat, json.url, 'img.jpg', `✅ ${mssg.random} *${command}*`, m)
   m.react(dmoji) 
break

default:
 }
}

handler.help = ['waifu', 'neko', 'megumin', 'loli']
handler.tags = ['nime']
handler.command = ['waifu', 'neko', 'megumin', 'loli'] 
handler.diamond = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
