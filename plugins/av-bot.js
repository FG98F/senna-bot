let handler = async (m, { conn }) => {
  let name = conn.getName(m.sender)
  let pp = './src/fg_logo.jpg' // هذا هو وصف الصورة الذي سيحتوي على القائمة
  conn.sendFile(m.chat, './src/fg_logo.jpg'  , 'fg_logo.jpg', m)
  // إرسال الصورة مع الوصف الذي يحتوي على القائمة
    conn.sendButton2(m.chat, `${mssg.hi} *${name}* \n\n${mssg.bohelp} \n`, mssg.ig, null, [
    ['⦙☰ Menu'  , '/menu'  ],
    ['⦙☰ Menu 2'  , '/menu2'  ],
    [`⌬ ${mssg.gp}s`, '/support'  ]
  ], m)
}

handler.customPrefix = /^(bot|senna)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
