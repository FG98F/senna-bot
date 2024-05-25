import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
┌───⊷ *المستوى*
▢ الاسم : *${name}*
▢ المستوى : *${user.level}*
▢  الدور : *${user.role}*
XP : *${user.exp - min}/${xp}*
└──────────────

انت تحتاج الي *${max - user.exp}* *XP* لرفع مستواك
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 عاش يحب ${conn.getName(m.sender)}    المستوى:`
        let str = `
┌─⊷ *المستوى*
▢ المستوى السابق : *${before}*
▢ المستوى الحالي : *${user.level}*
└──────────────

*_كلما تفاعلت مع البوت ارتفع مستواك_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['لفل']
handler.tags = ['econ']

handler.command = ['لفل', 'lvl', 'levelup', 'مستواي', 'مستوا','مستوى'] 

export default handler
