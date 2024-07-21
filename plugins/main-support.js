 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName}ᴮᴼᵀ ┃ SUPPORT*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Canal
${fgcanal}

▢ Grupo *1*
${bgp}

▢ Grupo *2*
${bgp2}

▢ Grupo *NSFW* 🔞
${bgp3}

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Todos los Grupos
 https://instabio.cc/fg98ff

▢ *Telegram*
• https://t.me/fgawgp
 ▢ *PayPal*
• https://paypal.me/fg98f
▢ *YouTube*
• https://www.youtube.com/fg98f`)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support'] 

export default handler
