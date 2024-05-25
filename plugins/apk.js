import { search, download } from 'aptoide-scraper';

const handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return conn.reply(m.chat, '*لتحميل التطبيقات استخدم الامر التالي:*\n\n*مثــال:*\n .تطبيق WhatsApp', m);

  try {
    let searchResults = await search(text);
    if (searchResults.length === 0) {
      return conn.reply(m.chat, ' *لا توجد نتائج لهذا التطبيق*', m);
    }

    let data = await download(searchResults[0].id);
    if (!data || !data.name || !data.package || !data.lastup || !data.size || !data.dllink || !data.icon) {
      return conn.reply(m.chat, '*لا يمكن الحصول على تفاصيل التطبيق*', m);
    }

    let response = `💌 *اسم التطبيق:* ${data.name}\n📦 *الحزمة:* ${data.package}\n🕒 *آخر تحديث:* ${data.lastup}\n📥 *الحجم:* ${data.size}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍɪʀᴢᴀ ʙᴏᴛ\n`;

    if (data.size.includes('GB') || parseFloat(data.size.replace(' MB', '')) > 999) {
      return conn.reply(m.chat, '🚩 *الملف ثقيل جدًا*', m);
    }

    const iconUrl = data.icon; // رابط أيقونة التطبيق
    await conn.sendMessage(m.chat, {
      text: response,
      contextInfo: {
        externalAdReply: {
          title: data.name,
          body: 'إضغط للمتابعة على إنستجرام',
          sourceUrl: 'https://instagram.com/rnj_.6',
          thumbnailUrl: iconUrl, // icon application 
          mediaType: 1, // matbdl walo
          showAdAttribution: true,
          renderLargerThumbnail: true
          m.react(rwait)
        }
      }
    }, { quoted: m });

    await conn.sendMessage(m.chat, { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null }, { quoted: m });
          m.react(done)
  } catch (error) {
    console.error(error);
    return conn.reply(m.chat, '*حدث خطأ أثناء معالجة الطلب*', m);
  }
};

handler.tags = ['dl'];
handler.help = ['تطبيق'];
handler.command = /^(apk|apkdl|dapk2|aptoide|aptoidedl|تطبيق)$/i;

export default handler;
