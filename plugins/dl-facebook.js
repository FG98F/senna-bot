
import fg from 'api-dylux';
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  
if (!args[0]) throw `✳️ ${mssg.noLink('Facebook')}\n\n📌 ${mssg.example} :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
  m.react(rwait);

  try {
    let result = await fg.fbdl(args[0]);
    let tex = `
┌─⊷ *𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕*
▢ *${mssg.title}:* ${result.title}
└───────────`;
    conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
    m.reply(mssg.error)
  }
};
handler.help = ['فيسبوك'].map(v => v + ' <رابط الفيديو>');
handler.tags = ['dl'];
handler.command = /^((facebook|fb|فيسبوك)(downloder|dl)?)$/i;
handler.diamond = false;

export default handler;
