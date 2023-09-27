
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {

 let lang = global.db.data.users[m.sender].language
  if (!text) throw `✳️ ${mssg.notext}`
  m.react('🗣️') 
  try { 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=${lang}`)
  let json = await res.json()
  m.reply(json.success.replace('simsimi', `${botName}`).replace('Simsimi', `${botName}`).replace('sim simi', `${botName}`))
} catch {
  m.reply(`❎ Intenta de nuevo mas tarde La api de SimSimi se cayo`)
}

}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'simi'] 

export default handler
