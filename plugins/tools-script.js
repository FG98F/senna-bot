import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ SCRIPT*

▢ Git : ${_package.homepage}
`.trim())
    
}

handler.help = ['']
handler.tags = ['']
handler.command = ['', '', ''] 

export default handler
