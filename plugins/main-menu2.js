
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
◈ ━━━━ *𝑴𝒊𝒓𝒛𝒂  ┃ ᴮᴼᵀ* ━━━━ ◈ *${usedPrefix}*
┌─⊷ *𝑴𝒊𝒓𝒛𝒂* 
▢ 👋🏻 مرحباً! *%name*
▢ 👥 عدد المستخدمين : %totalreg
▢ 🟢 وقت النشاط : %muptime
%sbot
▢ 
└──────────────
`
    let pp = './src/fg_logo.jpg' 
      conn.sendButton2(m.chat, m2, mssg.ig, pp, [
      ['⦙☰ قائمة الاوامر', `${usedPrefix}menu`],
      ['⌬ جروب الدعم', `${usedPrefix}support`]
    ],m, rpyt)
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2','اوامر'] 

export default handler
