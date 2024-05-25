import fetch from 'node-fetch'
  let handler = async (m, { conn, args, usedPrefix, command }) => {

     let who
      if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
      else who = m.chat
       if (!who) throw `⌯ ضيـف مــنــشــن لــلــشــخــص\n\n📌 مـــثــال : ${usedPrefix + command} @مـنـشـن`

    let user = global.db.data.users[who]
   let res = await fetch('https://api.waifu.pics/sfw/bully')
    let uer = m.sender;
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `${lenguajeGB['smsAvisoFG']()}`

conn.sendFile(m.chat, json.url, 'error.gif', `يــبــدو ان @${uer.split('@')[0]} يــتــنــمــر عــلــي @${who.split`@`[0]} 😭👆🏻`, m, null, { mentions: [who,uer]})
              }
handler.help = ['تنمر']
handler.tags = ['fun']
handler.command = /^(تنمر)$/i
export default handler
