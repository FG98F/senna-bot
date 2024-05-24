import ytdl from 'ytdl-core';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `مثال : \n ${usedPrefix}${command} رابط الفيديو من يوتيوب`;
  
  const url = text; // يجب أن يكون هنا رابط الفيديو من يوتيوب مباشرة
  
  let info = await ytdl.getInfo(url);
  let { videoDetails: { title, thumbnails } } = info;
  let thumbnail = thumbnails[0].url;
  
  let wm = '♪ 𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄 ♪';
  
  m.react(rwait);
  let captvid = 'جاري التحميل';
  
  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });
  
  const tmpDir = os.tmpdir();
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);
  
  await streamPipeline(audioStream, writableStream);
  
  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
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
  m.react(done);
  
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
};

handler.help = [].map((v) => v + ' <رابط الفيديو من يوتيوب>');
handler.tags = [];
handler.command = ['mp3', 'اغنية'];
handler.exp = 0;
handler.diamond = false;

export default handler;
```
