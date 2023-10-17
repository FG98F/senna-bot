import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['258876219853', 'HACKER|⁰⁰⁷|SUB', true],
  ['258876219853']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['258876219853', '258876219853']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'HACKINO-BOT' 
global.author = '@007' 

//--info FG
global.botName = 'Senna'
global.fgig = 'https://www.instagram.com/hacker007sun_' 
global.fgsc = 'https://github.com/' 
global.fgyt = 'https://youtube.com/@galaxy'
global.fgpyp = 'https://paypal.me/freefiremaxdojis@gmail.com'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.bgp = 'https://chat.whatsapp.com/IVxQuRSZROpAkKn9jV3I2j'
global.bgp2 = 'https://chat.whatsapp.com/IVxQuRSZROpAkKn9jV3I2j'
global.bgp3 = 'https://chat.whatsapp.com/IVxQuRSZROpAkKn9jV3I2j' //--GP NSFW

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
