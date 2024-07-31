//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*✦┃تـــم إيقـاف الـبـوت في هذا القروب┃✦*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['ايقاف', 'chatoff'] 

export default handler
 
