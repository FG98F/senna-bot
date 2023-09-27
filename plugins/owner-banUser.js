
let handler = async (m, { conn, text, usedPrefix, command }) => {
    function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

    text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

    if(!text && !m.quoted) return m.reply(`✳️ ${mssg.noMention}\n\n📌 ${mssg.examples}: ${usedPrefix + command} @user`)
    if(isNaN(number)) return m.reply(`✳️ El número que ingresaste no es válido`)

      try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    	let number = user.split('@')[0]
        let num = global.db.data.users[user]
        num.banned = true
        conn.reply(m.chat, `
✅ BANEADO

───────────
@${number} ${mssg.banUser}`, m, { mentions: [user] })
    }
    
}
handler.help = ['ban @user']
handler.tags = ['owner']
handler.command = ['ban'] 
handler.rowner = true

export default handler
