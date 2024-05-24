import ytdl from 'ytdl-core';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `مثال : \n ${usedPrefix}${command} midle of night`;
  const url = text.trim();

  let vidInfo = await ytdl.getInfo(url);
  let { videoDetails: { title, thumbnails, lengthSeconds } } = vidInfo;
  let thumbnail = thumbnails[thumbnails.length - 1].url;

  let wm = '♪ 𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄 ♪'; // Your bot's watermark

  m.reply('جاري التحميل...');

  const audioStream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });
  const tmpDir = os.tmpdir();
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: title,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        body: wm,
        sourceUrl: url,
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  };
  await conn.sendMessage(m.chat, doc, { quoted: m });

  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
};

handler.help = ['<query>'];
handler.tags = [];
handler.command = ['mp3', 'songs', 'ytmp3doc', 'اغنيه'];
handler.exp = 0;
handler.diamond = false;

export default handler;
