
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["criss", "andrea"])}.mp3`

conn.sendButton(m.chat, `${mssg.hi} *${name}*\n`, mssg.ig, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      [`⌬ ${mssg.gp}s`, '/gpdylux']
    ], m) 
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|senna)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
