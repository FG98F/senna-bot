
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
◈ ━━━━ *𝑴𝒊𝒓𝒛𝒂  ┃ ᴮᴼᵀ* ━━━━━ ◈ *${usedPrefix}*
 👋🏻 مرحباً! 
 👥 عدد المستخدمين : %totalreg
 🟢 وقت النشاط : %muptime%sbot
▢ 
└──────────────
`
    let pp = './src/fg_logo.jpg' 
      conn.sendButton2(m.chat, m2, ${mssg.hi} *${name}*', `▢ 𝑴𝒊𝒓𝒛𝒂 ┃ ᴮᴼᵀ\n${mssg.ig}`, pp, [
      ['⦙☰ قائمة الاوامر', `${usedPrefix}اوامر`],
      ['⌬ جروب الدعم', `${usedPrefix}الدعم`]
    ],m, rpyt )
  
}


handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu','اوامر'] 

export default handler
