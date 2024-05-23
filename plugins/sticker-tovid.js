import fetch from 'node-fetch'
import fs from 'fs'
import { promisify } from 'util'
import { exec as execCallback } from 'child_process'

const exec = promisify(execCallback)

const converter = async bufferImage => {
  try {
    let pathFile = "./tmp/" + ~~(Math.random() * 1000000 + 1) + ".webp"
    fs.writeFileSync(pathFile, bufferImage)
    await exec(`convert ${pathFile} ${pathFile}.gif`)
    await exec(`ffmpeg -i ${pathFile}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${pathFile}.mp4`)
    if (!fs.existsSync(pathFile + ".gif") || !fs.existsSync(pathFile + ".mp4")) {
      throw new Error("Failed convert file!");
    }
    let videoBuffer = fs.readFileSync(pathFile + ".mp4")
    fs.unlinkSync(pathFile)
    fs.unlinkSync(pathFile + ".gif")
    fs.unlinkSync(pathFile + ".mp4")
    return videoBuffer;
  } catch(error) {
    throw error;
  }
}

let handler = async (m, { conn, command, usedPrefix }) => {
	m.react(rwait)
	if (m.quoted && /sticker/.test(m.quoted.mtype) && !m.quoted.isAnimated) {
		let img = await m.quoted.download()
		await conn.sendMessage(m.chat, { image: img, jpegThumbnail: img }, { quoted: m })
	} else if (m.quoted && /sticker/.test(m.quoted.mtype) && m.quoted.isAnimated) {		
		let img = await m.quoted.download()
		let out = await converter(img)
		await conn.sendMessage(m.chat, { video: out, gifPlayback: /gif/i.test(m.text), gifAttribution: ~~(Math.random() * 2) }, { caption: '*DONE*', quoted: m });
	} else throw `✳️ ${mssg.replyStick}`
}
handler.help = ['لفيديو <ملصق>']
handler.tags = ['sticker']
handler.command = ['tovideo', 'tovid', 'mp4', 'tomp4', 'togif','لفيديو']

export default handler
