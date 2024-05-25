let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `${mssg.ig}` }, { quoted: m })
	}

handler.help = ['خواطر']
handler.tags = ['islam']
handler.command = /^(خواطر)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/d71ac88d174d4bf81b6eb.mp4',
'https://telegra.ph/file/a9e34f76d0b669dc5c37e.mp4',
'https://telegra.ph/file/e117fa7d7b8da89396d66.mp4',
'https://telegra.ph/file/7c2b7c12a2b9bce07c8dc.mp4',
'https://telegra.ph/file/7edca0602250555095870.mp4',
'https://telegra.ph/file/9cf00775e86a577f13cbb.mp4',
'https://telegra.ph/file/75a37e0b7f96df91476b3.mp4',
'https://telegra.ph/file/7d8160471e1dcce00985c.mp4',
'https://d.top4top.io/m_2730omr5s0.mp4',
'https://telegra.ph/file/a9d9d8d68fa59d5cbc825.mp4',
'https://telegra.ph/file/c03d2673ece027f2d5978.mp4' ,
'https://telegra.ph/file/496a777c2947567762976.mp4' ,
'https://telegra.ph/file/d2cc8313f595012679c2f.mp4' ,
'https://telegra.ph/file/9fcbddb2360cb88f6c062.mp4' ,
'https://telegra.ph/file/1a9b5f0fd76ce586efdeb.mp4' ,
'https://telegra.ph/file/017cb3270eaa131884abb.mp4' ,
'https://telegra.ph/file/7a2d843928cc0a817bd7a.mp4' ,
'https://telegra.ph/file/7a2d843928cc0a817bd7a.mp4' ,
'https://telegra.ph/file/d284017438b72d66b8dd8.mp4' ,
'https://telegra.ph/file/bdeeb9cd6e4ade7e2d84b.mp4' ,
'https://telegra.ph/file/bab94163b0bce619882f2.mp4' ,
'https://telegra.ph/file/e7ec4a6f24e53b656ba43.mp4' ,
'https://telegra.ph/file/09ba522bdd0e61e52a230.mp4' ,
'https://telegra.ph/file/71271ae111645c99173db.mp4' ,
'https://telegra.ph/file/030f7488956a6fd86eaf8.mp4' ,
'https://telegra.ph/file/074de9dc12fefb264e64e.mp4' ,
'https://telegra.ph/file/5cc71b0e90aab72f74158.mp4' ,
'https://telegra.ph/file/da0600447cffcd1c2dcea.mp4' ,
'https://telegra.ph/file/f35c4e48b72bf5de32ec1.mp4' ,
'https://telegra.ph/file/9410ecc1039f5305df003.mp4' ,
'https://telegra.ph/file/4bdb0496d023ab29cce35.mp4' ,
'https://telegra.ph/file/660d96cce997c566af9b5.mp4' ,
'https://telegra.ph/file/5db36451d34306d258854.mp4' ,
'https://telegra.ph/file/e6b3f2c9711c5a17f92f0.mp4' ,
'https://telegra.ph/file/38efba6b86a93f6c4e8af.mp4' ,
'https://telegra.ph/file/30fe6a2ffdf3d90e4d299.mp4' ,
'https://telegra.ph/file/f59a873496034744b29c0.mp4' ,
'https://telegra.ph/file/fccfe23bb3c82ddd5e860.mp4' ,
'https://telegra.ph/file/e8618d5869068db35d54b.mp4' ,
'https://telegra.ph/file/9d21992a5e94124b2fec8.mp4' ,
'https://telegra.ph/file/ff6be3f4f6bcde330674a.mp4' ,
'https://telegra.ph/file/631fe235b63fe5f9e62ed.mp4' ,
'https://telegra.ph/file/7cf3bb90e23066f84e4d9.mp4' ,
'https://telegra.ph/file/ffe735d2d3249caffa8e0.mp4' ,
'https://telegra.ph/file/fae0129819406443f3d22.mp4' ,
'https://telegra.ph/file/01e7d562f0d23cfa49dc9.mp4' ,
'https://telegra.ph/file/e2ce3ea7659fc34a55fd3.mp4' ,
'https://telegra.ph/file/8dcc4d7345f9aacf026be.mp4' ,
'https://telegra.ph/file/791c220f90113e60d738b.mp4' ,
'https://c.top4top.io/m_2731bdkh60.mp4',
]
