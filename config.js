import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['59162002904', 'marselo', true],
  ['59162002904']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['50489079501', '573143917092']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'Rosita┃ᴮᴼᵀ' 
global.author = '@fg98' 

//--info FG
global.botName = 'rosita-bot'
global.fgig = 'https://instagram.com/sr.m0in?igshid=NGVhN2U2NjQ0Yg==' 
global.fgsc = '' 
global.fgyt = 'https://youtube.com/@NmusicAi?si=LtZjItFJghwlZad-'
global.fgpyp = ''
global.fglog = '' 

//--- Grupos WA
global.fgcanal = ''
global.bgp = ''
global.bgp2 = ''
global.bgp3 = '' //--GP NSFW

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
