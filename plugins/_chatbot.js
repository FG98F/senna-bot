
import fetch from 'node-fetch'
export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let user = global.db.data.users[m.sender]
    let lang = user.language
    
      if (!user.chatbot)
        return !0
        try {
        let api = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=${lang}`)
        let res = await api.json()
        m.reply(res.success.replace('simsimi', `${botName}`).replace('Simsimi', `${botName}`).replace('sim simi', `${botName}`))
      } catch {
        m.reply(`❎ La  api de SimSimi se cayo!!\n\nDesactiva chatbot con */off chatbot*`)
      }
}
