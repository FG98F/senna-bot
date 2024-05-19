
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ Use estos comandos sin el prefijo: *${usedPrefix}*
┌─⊷ *AUDIOS* 
▢ Bot
▢ Buenos días
▢ Buenas tardes 
▢ Buenas noches
▢ Fino señores
▢ Sad
└──────────────
`
    let pp = './src/fg_logo.jpg' 
    conn.sendButton2(m.chat, m2, mssg.ig, pp, [
      ['⏍ معلومات البوت', `${usedPrefix}botinfo`],
      ['⌬ جروب الدعم', `${usedPrefix}support`]
    ],m, rpyt)
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
