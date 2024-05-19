
let handler = async (m, { conn }) => {
  let name = await conn.getName(m.sender);
  let av = `./src/fg_logo.jpg`;
  let pp = `./src/fg_logo.jpg`;

  let buttons = [
    [{ text: "⦙☰ Menu", callbackData: "/menu" }],
    [{ text: "⦙☰ Menu 2", callbackData: "/menu2" }],
    [{ text: `⌬ ${mssg.gp}s`, callbackData: "/support" }]
  ];

  let message = `${mssg.hi} *${name}* \n\n${mssg.bohelp} \n`;

  await conn.sendFile(m.chat, av, message, mssg.ig, null, m, rpyt, true, { type: "audioMessage", ptt: true });
  await conn.sendMessage(m.chat, { image: { url: pp }, buttons: buttons }, { quoted: m });

  m.react("📃");
};

handler.customPrefix = /^(bot|senna)$/i;
handler.command = new RegExp();

export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
