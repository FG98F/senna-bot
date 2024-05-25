let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ 
المستخدم مفقود من قاعدة البيانات الخاصة بي`
    conn.reply(m.chat, `
┌───⊷ *محفظه* ⊶
▢ *📌الاسم* : _@${who.split('@')[0]}_
▢ *💎عدد* : _${user.diamond}_
▢ *⬆️XP* : _المجموع ${user.exp}_
└──────────────

*NOTA :* 
يمكنك شراء 💎 الماس باستخدام الطلبات
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['محفظه']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'الماس','محفظه','محفظة'] 

export default handler
      
