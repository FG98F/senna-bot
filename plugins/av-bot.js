let handler = async (m, { conn }) => {
  let name = conn.getName(m.sender)
  let pp = './src/fg_logo.jpg' // هذا هو وصف الصورة الذي سيحتوي على القائمة

  // إرسال الصورة مع الوصف الذي يحتوي على القائمة
  conn.sendFile(m.chat, './src/fg_logo.jpg'  , 'fg_logo.jpg', m)
  conn.sendButton2(m.chat, rcanal, text.trim(), `▢ 𝑴𝒊𝒓𝒛𝒂 ┃ ᴮᴼᵀ\n${mssg.ig}`, pp [
      ['⏍ معلومات البوت', `${_p}botinfo`],
      ['⌬ الدعم', `${_p}support`]
    ], m, rpl)
}

handler.customPrefix = /^(bot|senna)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
