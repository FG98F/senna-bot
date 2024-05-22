import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `لـ تحميل الأغاني الجميلة والعريقة اليك هاذا الأمر \n\n مثـال:\n ${usedPrefix}${command} اسم الشيء المراد سماعه`;
  await m.react(rwait);

  let search = await yts(text);
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!search) throw 'لم يتم إيجاد أي شئ بهاذا العنوان';
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let wm = ' ثم التحميل بنجاح';

  let captvid = `
       ≡ *𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄*
  ❏ العنوان: ${title}
  ❐ المدة: ${timestamp}
  ❑ المشاهدات: ${views}
  ❒ تم التحميل: ${ago}
  ❒ الرابط: ${url}
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍɪʀᴢᴀ ᴍᴜꜱɪᴄ`;

  conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author }, { quoted: m });


  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        mediaType: '',
        mediaUrl: '',
        title: '',
        body: '',
        sourceUrl: '',
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`حدث خطأ أسف: ${err}`);
    } else {
      console.log(`ثم حدف الأغنية: ${tmpDir}/${title}.mp3`);
    }
  });
};

handler.help = ['صوت'].map((v) => v + ' <اكتب الرابط>');
handler.tags = ['downloader'];
handler.command = /^صوت|song$/i;
handler.diamond = false
export default handler;
