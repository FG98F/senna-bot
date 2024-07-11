import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['50248975917', 'TMD', true],
  ['50236495231']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50248975917', '50236495131']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'TMD┃VANESSA┃ALE ᴮᴼᵀ' 
global.author = '@blanco' 

//--info FG
global.botName = 'TMD'
global.fgig = 'https://www.instagram.com/solomemes6648?igsh=YzljYTk1ODg3Zg==' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://chat.whatsapp.com/CL4WjFJLcASDNpdJp5YU5C'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363177092661333@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VadpjJUHVvTTBosytY2O'
global.bgp = 'https://chat.whatsapp.com/HZ1SJZ1786ALUyCylnyhKy'
global.bgp2 = 'https://chat.whatsapp.com/IiT5ZUQFMiY5x28EhZbJWO'
global.bgp3 = 'https://chat.whatsapp.com/HZ1SJZ1786ALUyCylnyhKy' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
