let handler = async function (m, { conn, text, usedPrefix }) {
  
  let m2 = `
  ◈ ━━━━ *𝑴𝒊𝒓𝒛𝒂  ┃ ᴮᴼᵀ* ━━━━━ ◈ *${usedPrefix}*
   👋🏻 مرحباً! : %name
   👥 عدد المستخدمين : %totalreg
   🟢 وقت النشاط : %muptime%sbot
  ▢ 
  └──────────────
  `
  let pp = './src/fg_logo.jpg'
  let buttons = [
    [ '⦙☰ قائمة الاوامر', `${usedPrefix}اوامر`],
    [ '⌬ جروب الدعم', `${usedPrefix}support`]
  ]
  let buttonMessage = {
    image: pp,
    caption: m2,
    buttons: buttons,
    headerType: 4
  }
  conn.sendMessage(m.chat, buttonMessage, { quoted: m })
    .then(() => {
      // تأكد من أن البوت لديه الصلاحيات لإضافة التفاعلات
      m.react('📃')
        .catch(console.error) // في حال وجود خطأ سيتم طباعته
    })
    .catch(console.error) // في حال وجود خطأ في إرسال الرسالة سيتم طباعته
}

handler.help = ['help']
handler.tags = ['main']
handler.command = ['menu', 'اوامر']

export default handler
