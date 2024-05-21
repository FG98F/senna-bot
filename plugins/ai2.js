import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw 'Example: .ai how are you'
  let anu = await fetch(`https://aemt.me/openai?text=${text}`)
  let data = await anu.json()
  m.reply(data.result)
  }
handler.help = ['openai2']
handler.tags = ['ai']
handler.command = /^(ai2|openai2|gpt2)$/i
handler.limit = false

export default handler
