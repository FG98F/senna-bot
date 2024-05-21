import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw 'تحدث مع الذكاء الإصطناعي بواسطة هاذا الأمر \n\n .ai عاصمة اليمن'
  let anu = await fetch(`https://aemt.me/openai?text=${text}`)
  let data = await anu.json()
  m.reply(data.result)
  }
handler.help = ['بوت']
handler.tags = ['بوت']
handler.command = /^(بوت|openai|تحدث)$/i
handler.limit = false

export default handler
