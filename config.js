import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['+2250585256740', 'FG98', true],
  ['+2250585256740']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['+2250585256740', '+2250585256740']
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
global.packname = 'Senna┃ᴮᴼᵀ' 
global.author = '@fg98' 

//--info FG
global.botName = '𓄂⍣⃝ 🪽𓍝𝙔𝘼𝙉𝙆𝙀𝙀 𝙃𝙀𝙇𝙇𝙎☠︎🌹🎧✮⃝'
global.fgig = 'https://instagram.com/fg98_ff' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363177092661333@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaCeuZd6mYPQiWqxXj1F'
global.bgp = 'https://chat.whatsapp.com/BESBo5xjvIZE4YVvth6Yzr'
global.bgp2 = 'https://chat.whatsapp.com/I7bvd8XCAOUHjgkHteqFC7'
global.bgp3 = 'https://chat.whatsapp.com/F0JTTyZ3hsoL7OlU8TEpuH' //--GP NSFW

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
