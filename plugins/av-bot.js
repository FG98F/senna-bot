
let handler = async (m, { conn }) => {
  let name = await conn.getName(m.sender);
  let av = `./src/fg_logo.jpg`;
  let pp = `./src/fg_logo.jpg`;
  let buttons = [
    { buttonId: "/menu", buttonText: { displayText: "⦙☰ Menu" }, type: 1 },
    { buttonId: "/menu2", buttonText: { displayText: "⦙☰ Menu 2" }, type: 1 },
    { buttonId: "/support", buttonText: { displayText: `⌬ ${mssg.gp}s` }, type: 1 }
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
