 
import fg from 'api-dylux'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    
        if (!args[0]) throw `✳️ ${mssg.noLink('TikTok')}\n\n 📌 ${mssg.example} : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`
        if (!args[0].match(/tiktok/gi)) throw `❎ ${mssg.noLink('TikTok')}`
        m.react(rwait)
      try {
        let res = await fetch(global.API('fgmods', '/api/downloader/tiktok2', { url: args[0] }, 'apikey'))
        let data = await res.json()

        if (data.result.video) {
            let tex = `
┌─⊷ *TIKTOK DL* 
▢ *${mssg.name}:* ${data.result.author.name}
▢ *${mssg.username}:* ${data.result.author.unique_id}
▢ *${mssg.duration}:* ${data.result.video.durationFormatted}
▢ *${mssg.quality}:* ${data.result.video.ratio}
▢ *Likes:* ${data.result.stats.likeCount}
▢ *${mssg.views}:* ${data.result.stats.playCount}
▢ *${mssg.desc}:* ${data.result.title}
└───────────
`
            conn.sendFile(m.chat, data.result.video.noWatermark, 'tiktok.mp4', tex, m);
            m.react(done)
        } else {
            let cap = `
▢ *Likes:* ${data.result.stats.likeCount}
▢ *${mssg.desc}:* ${data.result.title}
`
            for (let tt of data.result.images) {
                conn.sendMessage(m.chat, { image: { url: tt.url }, caption: cap }, { quoted: m })
            }
            conn.sendFile(m.chat, data.result.music.play_url, 'tiktok.mp3', '', m, null, { mimetype: 'audio/mp4' })
            m.react(done)
        }
    } catch (error) {
        m.reply(`❎ ${mssg.error}`)
    }
}

handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = ['tiktok', 'tt', 'tiktokimg', 'tiktokslide']
handler.diamond = true

export default handler
