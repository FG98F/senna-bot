import fetch from 'node-fetch';
import GIFBufferToVideoBuffer from '../lib/Gifbuffer.js';

const getBuffer = async (url) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (error) {
    console.error("فشل في الحصول على البفر", error);
    throw new Error("فشل في الحصول على البفر");
  }
}

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  } else {
    who = m.chat;
  }

  if (!who) throw `✳️ منشن شخص أو أشر عليه\n\n📌 مثال : ${usedPrefix + command} @tag`;

  let name = conn.getName(who);
  let name2 = conn.getName(m.sender);
  m.react(rwait);

  let reaction = await fetch(`https://api.waifu.pics/sfw/${command}`);
  if (!reaction.ok) throw await reaction.text();
  
  let json = await reaction.json();
  let { url } = json;
  const gifBuffer = await getBuffer(url);
  const gifToVideoBuffer = await GIFBufferToVideoBuffer(gifBuffer);

  conn.sendMessage(
    m.chat,
    { video: gifToVideoBuffer, caption: `(${name2}) ${command} ${name}`, gifPlayback: true, gifAttribution: 0 },
    { quoted: m }
  );

  await conn.sendMessage(m.chat, { react: { text: '☺️', key: m.key } })
; 
}

handler.tags = ['reaction'];
handler.help = [
  'bully @tag',
  'cuddle @tag',
  'cry @tag',
  'hug @tag',
  'awoo @tag',
  'kiss @tag',
  'lick @tag',
  'pat @tag',
  'smug @tag',
  'bonk @tag',
  'yeet @tag',
  'blush @tag',
  'smile @tag',
  'wave @tag',
  'highfive @tag',
  'handhold @tag',
  'nom @tag',
  'bite @tag',
  'glomp @tag',
  'slap @tag',
  'kill @tag',
  'happy @tag',
  'wink @tag',
  'poke @tag',
  'dance @tag',
  'cringe @tag'
];

handler.command = /^(♥|طرد|بحبك|بوت|بيبو)$/i;
handler.group = true;

export default handler;