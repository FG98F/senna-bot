let handler = async (m, { conn, args }) => {
    let user = Object.entries(global.db.data.users).filter(user => user[1].premiumTime).map(([key, value]) => {
      return { ...value, jid: key }
    })
   
    let sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
    let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
    
    //--- Global premium
    let premGlo = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
    let b = premGlo.map(v => `▢ *${mssg.name}:* @` + v.replace(/@.+/, '')).join('\n')
    
    let text = `
  ≡ *PREMIUM PERMANENTE*
┌─⊷
${b}
└───────────

   ≡ *USUARIOS PREMIUM*
   
▢ *${mssg.total}:* ${sortedP.length} 
  ${sortedP.slice(0, len).map(({ jid, name, premiumTime, registered }, i) => `
┌─⊷ *${registered ? name : conn.getName(jid)}*
▢ *${mssg.name}:* @${jid.split`@`[0]}
▢ *${mssg.expire}:*\n${premiumTime > 0 ? `_*${clockString (premiumTime - new Date() * 1)}*_` : `🚫 Expirado`}`).join('\n└───────────')} 
└───────────`

  conn.reply(m.chat, text, m, { mentions: await conn.parseMention(text)})


}
handler.help = ['listprem']
handler.tags = ['main']
handler.command = ['listprem', 'premlist', 'listpremium'] 
  
export default handler
  
  function clockString(ms) {
    let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [ d, ` ${mssg.day} `, h, ` ${mssg.hour} `, m, ` ${mssg.minute}`].map(v => v.toString().padStart(2, 0)).join('')
  }
  
  function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
  }
  
  function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
      return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
    }
    else return a => a === undefined ? _default : a
  }