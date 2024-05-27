import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `✳️ ${mssg.replyImg}`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`*❆❯━━━❲𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕❳━━━━━❮❆*
 
▢ *الحجم :* ${media.length} Byte(s) 

▢ *الرابط :* ${link}
  `)
}
handler.help = ['تليجراف']
handler.tags = ['sticker']
handler.command = ['upload', 'تليجراف']

export default handler
