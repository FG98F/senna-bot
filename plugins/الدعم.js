import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-naruto.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `

*『 ️اليك قائمه بسورس البوت 』*
╯────────────────⟢ـ
*『 ️واتساب 』*

https://wa.me/+201028085788

*『 ️منصاتي 』*

https://atom.bio/elakrabelyotyobr

╯────────────────⟢ـ
*『 ️نقابة واتساب 』*

https://chat.whatsapp.com/L6waLqtO4Of2ttylZoLefD
╯────────────────⟢ـ
˼🥷˹ قناة الدعم : 

https://whatsapp.com/channel/0029VahbMZl4tRrkdpJrCv2f
*╯────────────────⟢ـ* `, m)
}
handler.command = handler.help = ['دعم','الدعم']
handler.tags = ['Elakreb']
export default handler
