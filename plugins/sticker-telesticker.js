
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ ${mssg.tgStick}`
  if (!text.includes('t.me')) return m.reply(`❎ ${mssg.tgStick}`)
  m.react(rwait)
  let stick = await (await fetch(global.API('fgmods', '/api/downloader/telesticker', { url: text }, 'apikey'))).json()
  let res = stick.result.map(obj => obj.url)
  m.reply(`
✅ Enviando Stickers

▢ *${mssg.total} stickers:* ${res.length}`)

  for (let i of res) {
    const stiker = await sticker(false, i, global.packname, global.author)
    await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    //await delay(1500)
    m.react(done)
  }
}

handler.help = ['telestick']
handler.tags = ['sticker']
handler.command = ['tgstick', 'telestick', 'telesticker', 'tgsticker']

export default handler
