
function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['المطور']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'المطور'] 

export default handler
