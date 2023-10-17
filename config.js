import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['5491155605279', 'FG98', true],
  ['5491155605279']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['5491155605279', '5491155605279']
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
global.packname = '⏤͟͟͞͞⻤𝐁𝐎𝐓 ᭄𝐖𝐇𝐎𝜟𝐌𝐈☆ۣۜۜ͜͡☯️' 
global.author = 'takeshi' 

//--info FG
global.botName = '⏤͟͟͞͞⻤𝐁𝐎𝐓 ᭄𝐖𝐇𝐎𝜟𝐌𝐈☆ۣۜۜ͜͡☯️'
global.fgig = '@takefamboy' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://www.youtube.com/@WHUAMI'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.bgp = 'https://chat.whatsapp.com/FZe8CPoahnaLXzjLrFF1jg'
global.bgp2 = 'https://chat.whatsapp.com/FZe8CPoahnaLXzjLrFF1jg'
global.bgp3 = 'https://chat.whatsapp.com/FZe8CPoahnaLXzjLrFF1jg' //--GP NSFW

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
