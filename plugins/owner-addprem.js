
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let teP = `✳️ ${mssg.useCmd}\n\n📌 ${mssg.example}: ${usedPrefix + command} @${m.sender.split`@`[0]} 2`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) return m.reply(teP, null, { mentions: conn.parseMention(teP)})
    if (!(who in global.db.data.users)) throw `✳️ ${mssg.userDb}`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) return m.reply(teP, null, { mentions: conn.parseMention(teP)})
    if (isNaN(txt)) return m.reply(teP, null, { mentions: conn.parseMention(teP)})

   // var dias = 86400000 * txt //dias
    var dias = 3600000 * txt  // horas
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += dias
    
    else user.premiumTime = now + dias    
    user.prem = true

    m.reply(`
✅ PREMIUM

@${who.split`@`[0]} ${mssg.addPremUser}
┌──────────
▢ *${mssg.name}:* ${user.name}
▢ *${mssg.hour}:* ${txt}
└──────────
`, null, { mentions: [who] })
}
handler.help = ['addprem @user <hour>']
handler.tags = ['owner']
handler.command = ['addprem', 'addpremium'] 
handler.group = true
handler.rowner = true

export default handler