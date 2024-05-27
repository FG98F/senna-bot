import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '🌺 اكتب الرابط';
  await m.reply(`جاري التحميل`);
  try {
    const q = '128kbps';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size = await yt.audio[q].fileSizeH;
    const cap = `  *◉—⌈ ♪ 𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄 ♪ ⌋—◉*\n❏ *العنوان:* ${ttl}\n❏ *الحجم:* ${size}\n`.trim();
    await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'audio/mpg', fileName: `${ttl}.mp3`}, {quoted: m});
    m.react(done)
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `  *◉—⌈ ♪ 𝑴𝒊𝒓𝒛𝒂 𝑴𝒖𝒔𝒊𝒄 ♪ ⌋—◉*\n❏ *العنوان:* ${n}\n❏ *الحجم:* ${n3}\n✰`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'audio/mpg', fileName: `${n}.mp3`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*⚠️ Ocurrió un error*', m);
    }
  }
};
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i;
export default handler;
