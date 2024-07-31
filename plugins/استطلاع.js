const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';
  const b = text.split('|');
  if (!b[1]) throw `*[❗] صيغة الاستخدام ${usedPrefix + command} سؤال؟ |خيار1|خيار2...*`;
  if (b[12]) throw `*[❗] صيغة الاستخدام ${usedPrefix + command} سؤال؟ |خيار1|خيار2...*`;
  const caption = `*استطلاع أجابة بواسطة:*\n${name}\n*السؤال:*\n${text.split('|')[0]}`.trim();
  const options = text.split("|").slice(1).map(option => ({ optionName: option.trim() }));  
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: {
        name: caption,
        options: options,
        selectableOptionsCount: 1,
    }
  };
conn.relayMessage(m.chat, sendPollMessage, {quoted: m});
};
handler.help = ['encuesta question|option|option'];
handler.tags = ['group'];
handler.command = ['استطلاع', 'encuesta'];
export default handler;
