
let handler = m => m
handler.before = async function (m) {
    if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.text || !/^▢ CUANTO ES/i.test(m.quoted.text)) return !0
    this.math = this.math ? this.math : {}
    if (!(id in this.math)) return m.reply(mssg.gameOff)
    if (m.quoted.id == this.math[id][0].id) {
        let math = JSON.parse(JSON.stringify(this.math[id][1]))
        if (m.text == math.result) {
            global.db.data.users[m.sender].coin += math.bonus
            clearTimeout(this.math[id][3])
            delete this.math[id]
            m.reply(`✅ *${mssg.gaDone}*\n\n‣ ${mssg.win} : *+${math.bonus} 🪙*`)
        } else {
            if (--this.math[id][2] == 0) {
                clearTimeout(this.math[id][3])
                delete this.math[id]
                m.reply(`*${mssg.mathOff}*\n\n${mssg.answer}: *${math.result}*`)
      } else m.reply(`❎ ${mssg.mathError} ${this.math[id][2]} ${mssg.chance}`)
        }
    }
    return !0
}

export default handler
