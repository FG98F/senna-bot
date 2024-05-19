
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["criss", "andrea"])}.mp3`
      
     let pp = './src/fg_logo.jpg'
      conn.sendButton2(m.chat, `${mssg.hi} *${name}* \n\n${mssg.bohelp} \n`, mssg.ig, null, pp, [
      ['⦙☰ Menu', '/menu'],
      ['⦙☰ Menu 2', '/menu2'],
      [`⌬ ${mssg.gp}s`, '/support']
    ], m) 
    conn.sendFile(m.chat, av, 'audio.mp3', pp, null, m, true, { type: 'audioMessage', ptt: true })
   m.react('📃')
} 

handler.customPrefix = /^(bot|senna)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

