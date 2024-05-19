 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName}ᴮᴼᵀ ┃ SUPPORT*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ قناة البوت:
${fgcanal}

▢ جروب *1*
${bgp}

▢ جروب *2*
${bgp2}

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ *تيليجرام:*
• https://t.me/MR_X61
 ▢ *إنستغرام:*
• https://instagram.com/rnj_.6
▢ *واتساب:*
• https://wa.me/qr/S4ONIQ4XJ2N4E1`)

}
handler.help = ['الدعم']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support', 'الدعم', 'دعم الجروب'] 

export default handler
