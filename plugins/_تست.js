import {
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  getDevice
} from '@whiskeysockets/baileys'

const handler = async (m, {
  conn,
  usedPrefix,
  _p,
  __dirname,
  text,
  isPrems
}) => {
  const device = await getDevice(m.key.id);
  const mentionId = m.key.participant || m.key.remoteJid;
  
  await conn.sendMessage(m.chat, { react: { text: '💬', key: m.key } });
  
  const _uptime = process.uptime() * 1000
  const uptime = clockString(_uptime)
  const user = global.db.data.users[m.sender]
  const rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  const more = String.fromCharCode(8206)
  const readMore = more.repeat(850)
  const date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const { money, joincount } = global.db.data.users[m.sender]
  const { exp, limit, level, role } = global.db.data.users[m.sender]

  if (device !== 'desktop' && device !== 'web') {
    var joanimiimg = await prepareWAMessageMedia({
      image: {
        url: 'https://telegra.ph/file/b9b4ff9c328cfe440f91f.jpg'
      }
    }, {
      upload: conn.waUploadToServer
    })
    const interactiveMessage = {
      body: {
        text: ``.trim()
      },
      footer: {
        text: `Copyright © 2024 Elakreb`.trim()
      },
      header: {
        title: `
> 🌟 معلومات البوت 🌟
╮────────────────⟢ـ
┆👋 مرحباً بك في قائمه البوت العقرب ⌈ @${mentionId.split('@')[0]} ⌋
┆📆 تــاريــخ: ${date} ⌋
┆🕰️ وقــت نــشــط: ${uptime}  
┆👑 الــرتــبــه: ${role}
┆🤝 مــســتــخـــدمــيــن:  ${rtotalreg}
┆💎 خــبــرة:  ${exp}
┆🔝 مــســـتــوى:   ${rtotalreg}
*╯────────────────⟢ـ*
> 📝 مــلــحــوظـــة 📝
╮──────────────────⟢ـ
┆الــبــوت قــيــد الــتــطــويــر
╯──────────────────⟢-
        `,
        subtitle: `test`,
        hasMediaAttachment: true,
        imageMessage: joanimiimg.imageMessage,
      },
      nativeFlowMessage: {
        buttons: [{
          "name": "single_select",
          "buttonParamsJson": "{\"title\":\"「📜╎الــــقــــوئــم╎📜」\",\"sections\":[{\"ASSAL\":\"ASSAL\",\"highlight_label\":\"مميز\",\"rows\":[{\"header\":\"الأوامــــر 👾\",\"title\":\"بيبعت  ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 لك اوامر البوت\",\"description\":\"\",\"id\":\".الاوامر\"},{\"header\":\"الـــمـشرفــيـيـن 🫣\",\"title\":\"يعرض   ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 المشرفيين   !\",\"description\":\"\",\"id\":\". اوامر2\"},{\"header\":\"الاعضاء 🤝🏻\",\"title\":\" يعرض ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵   الاعضاء\",\"description\":\"\",\"id\":\".الاعضاء\"},{\"header\":\"المطور💬\",\"title\":\" يعرض ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 المطور\",\"description\":\"\",\"id\":\".قائمة_المطور\"},{\"header\":\"التحميلات⏳\",\"title\":\" يعرض ❯⏐ 𝐵𝛩𝑇𝐸𝐿𝐴𝐾𝑅𝐴𝐵 التحميلات\",\"description\":\"\",\"id\":\".التحميلات\"},{\"header\":\" العاب 🪀\",\"title\":\" يعرض ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 العاب\",\"description\":\"\",\"id\":\".العاب\"},{\"header\":\"اللفل 🫵🏻\",\"title\":\" يعرض ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 اللفل\",\"description\":\"\",\"id\":\".اللفل\"},{\"header\":\"ديـن 🦋\",\"title\":\" يعرض ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 ديــن\",\"description\":\"\",\"id\":\".دين\"},{\"header\":\"فــتح الــبوت 🌙\",\"title\":\"يعرض    ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 الـبوت فتح\",\"description\":\"\",\"id\":\".فتح-البوت\"},{\"header\":\"ستيكرات 🫂\",\"title\":\"يعرض ❯⏐  𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 ستيكرات\",\"description\":\"\",\"id\":\".ستيكرات\"},{\"header\":\"الاصوات 🧠\",\"title\":\" يعرض ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 الاصوات\",\"description\":\"\",\"id\":\".الاصوات\"},{\"header\":\"المهام 🌤\",\"title\":\" يعرض ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 المهام\",\"description\":\"\",\"id\":\".المهام\"},{\"header\":\"الصور 🙈\",\"title\":\" يعرض ❯⏐ 𝐵𝛩𝑇 𝐸𝐿𝐴𝐾𝑅𝐴𝐵 الصور\",\"description\":\"\",\"id\":\".الصور\"}]}]}"        },
          {
            "name": "quick_reply",
            "buttonParamsJson": "{\"display_text\":\"「❄ ╎الـمــطـور╎❄ 」\",\"id\":\".المطور\"}"
          },
          {
            "name": "quick_reply",
            "buttonParamsJson": "{\"display_text\":\"「❄ ╎الاشتراك╎❄ 」\",\"id\":\".الاشتراك\"}"
          },
          {
            "name": "cta_url",
            "buttonParamsJson": "{\"display_text\":\"「⛈️╎قــنـاتـي╎⛈️」\",\"url\":\"https://whatsapp.com/channel/0029VahbMZl4tRrkdpJrCv2f\",\"merchant_url\":\"https://whatsapp.com/channel/0029VahbMZl4tRrkdpJrCv2f\"}"
          },
          {
            "name": "cta_url",
            "buttonParamsJson": "{\"display_text\":\"「⛈️ ╎مـوقـع الــمطـور╎⛈️」\",\"url\":\"https://atom.bio/elakrabelyotyobr\",\"merchant_url\":\"https://atom.bio/elakrabelyotyobr\"}"
          },
        ],
        messageParamsJson: ''
      }
    };

    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage,
        },
      },
    }, {
      userJid: conn.user.jid,
      quoted: m
    })
    msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = {
      mentionedJid: [mentionId]
    };
    conn.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });

  } else {
    conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);
  }
};
handler.help = ['menu'];
handler.tags = ['help'];
handler.command = /^(اوامر|menu|تام7|أوامر|الأوامر|ليست|List|list|help)$/i
export default handler;

function clockString(ms) {
  let h = isNaN(ms)? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms)? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms)? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}