
/*
import fs from "fs"
let handler = async (m, { conn, usedPrefix }) => {
    
    let session = m.sender.split('@')[0]
    if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `✳️ ${mssg.nsbot}`, m)
    else {
    await conn.reply(m.chat, `✅ ${mssg.msgcode}`, m)
    global.conn.reply(conn.user.jid, `${usedPrefix}botclone ${Buffer.from(fs.readFileSync("./bebots/" + session + "/creds.json"), "utf-8").toString("base64")}`, m)
    m.react(done)
    }
}
handler.help = ['getcode']
handler.tags = ['bebot']
handler.command = ['getcode']
handler.owner = true

export default handler
*/