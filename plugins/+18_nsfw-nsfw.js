import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 الجروب لا يدعم محتوى +18\n\nلتفعيل اكتب \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 15) throw m.reply(`😐 انت أصغر من السن المسموح! ارجع لما يكون عندك أكثر من 15 سنة`) 
   
m.react('🥵') 
let type = (command).toLowerCase()

switch (type) {

case 'ass':
case 'طيز':
    let as = await conn.getFile(global.API('fgmods', '/api/nsfw/ass', { }, 'apikey'))
    conn.sendFile(m.chat, as.data, 'img.jpg', `✅ صورة عشوائية ${command}`, m)
    m.react(xmoji) 
break

case 'boobs':
case 'بزااز':
   let xb = await conn.getFile(global.API('fgmods', '/api/nsfw/boobs', { }, 'apikey'))
   conn.sendFile(m.chat, xb.data, 'img.jpg', `✅ صورة عشوائية ${command}`, m)
   m.react(xmoji) 
break

case 'pussy':
case 'كس':
   let xp = await conn.getFile(global.API('fgmods', '/api/nsfw/pussy', { }, 'apikey'))
   conn.sendFile(m.chat, xp.data, 'img.jpg', `✅ صورة عشوائية ${command}`, m)
   m.react(xmoji) 
break

case 'lesbians':
case 'ليزب':
   let les = await conn.getFile(global.API('fgmods', '/api/nsfw/lesbian', { }, 'apikey'))
   conn.sendFile(m.chat, les.data, 'img.jpg', `✅ صورة عشوائية ${command}`, m)
   m.react(xmoji) 
break

case 'cosplay':
	     let img = await conn.getFile(global.API('fgmods', '/api/nsfw/cosplay', {}, 'apikey'))
        conn.sendFile(m.chat, img.data, 'img.jpg', `✅ نتيجة 🤭`, m)
	     m.react(xmoji) 
	break

default:
 }
}
handler.help = ['طيز', 'بزااز', 'ليزب', 'كس', 'كوسبلاي']
handler.tags = ['nsfw']
handler.command = /^(طيز|بزااز|ليزب|كس|كوسبلاي)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler