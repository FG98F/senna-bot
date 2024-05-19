
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
      conn.sendButton2(m.chat, m2, `▢ 𝑴𝒊𝒓𝒛𝒂 ┃ ᴮᴼᵀ\n${mssg.ig}`, pp, [
      ['⦙☰ قائمة الاوامر', `${usedPrefix}اوامر`],
      ['⌬ جروب الدعم', `${usedPrefix}الدعم`]
    ],m, rpyt)
   
}


handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu','اوامر'] 

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ?  --  : Math.floor(ms / 86400000)
  let h = isNaN(ms) ?  --  : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ?  --  : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ?  --  : Math.floor(ms / 1000) % 60
  return [d,  d  , h,  h  , m,  m  ].map(v => v.toString().padStart(2, 0)).join(  )
}
