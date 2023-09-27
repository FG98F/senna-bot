let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.math = conn.math ? conn.math : {}
    
    let te = `
🧮 *${mssg.gameMode}:* 
    
${Object.keys(modes).join(' | ')} 
  
*📌${mssg.example}:* _${usedPrefix+command} normal_`
    
  if (args.length < 1) throw te
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw te
    
  let id = m.chat
    if (id in conn.math) return conn.reply(m.chat, `⚠️ ${mssg.mathOn}`, conn.math[id][0])
    let math = genMath(mode)
    conn.math[id] = [
        await conn.reply(m.chat, `▢ CUANTO ES *${math.str}*=\n\n*${mssg.time}:* _${(math.time / 1000).toFixed(2)}_ *${mssg.second}*\n\n🎁 ${mssg.reward} : ${math.bonus} 🪙`, m),
        math, 4,
        setTimeout(() => {
            if (conn.math[id]) conn.reply(m.chat, `⏳ ${mssg.timeOff} *${math.result}*`, conn.math[id][0])
      delete conn.math[id]
        }, math.time)
    ]
}
handler.help = ['mates <modo>']
handler.tags = ['game']
handler.command = ['mates', 'mate', 'matemáticas', 'math'] 


let modes = {
  noob: [-3, 3,-3, 3, '+-', 15000, 80],
  fácil: [-10, 10, -10, 10, '*/+-', 20000, 100],
  normal: [-40, 40, -20, 20, '*/+-', 40000, 250],
  difícil: [-100, 100, -70, 70, '*/+-', 30000, 500],
  extremo: [-999999, 999999, -999999, 999999, '*/', 30000, 800],
  imposible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 1500],
  imposible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 3000]
}

let operators = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
}

function genMath(mode) {
    let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
    let a = randomInt(a1, a2)
    let b = randomInt(b1, b2)
    let op = pickRandom([...ops])
    let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
    if (op == '/') [a, result] = [result, a]
    return {
        str: `${a} ${operators[op]} ${b}`,
        mode,
        time,
        bonus,
        result
    }
}

function randomInt(from, to) {
    if (from > to) [from, to] = [to, from]
    from = Math.floor(from)
    to = Math.floor(to)
    return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

handler.modes = modes

export default handler
