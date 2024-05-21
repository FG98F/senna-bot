let handler = async (m, { conn }) => {
  let name = conn.getName(m.sender)
  let imageCaption = `${mssg.hi} *${name}* \n\n${mssg.bohelp}` // هذا هو وصف الصورة الذي سيحتوي على القائمة

  // إرسال الصورة مع القائمة كرسالة تفاعلية
  let message = {
    image: { url:  './src/fg_logo.jpg'  },
    caption: imageCaption,
    buttons: [
      { buttonId:  '/menu' , buttonText: { displayText:  '⦙☰ Menu'  }, type: 1 },
      { buttonId:  '/menu2' , buttonText: { displayText:  '⦙☰ Menu 2'  }, type: 1 },
      { buttonId:  '/support' , buttonText: { displayText:  '⌬ Support'  }, type: 1 }
    ]
  }
  await conn.sendMessage(m.chat, message, { quoted: m })
}

handler.customPrefix = /^(bot|senna)$/i
handler.command = new RegExp

export default handler
