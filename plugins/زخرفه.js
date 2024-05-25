function handler(m, { text }) {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  m.reply(teks.replace(/[a-z]/gi, v => {
      return { 
          'a': '𝐴',
          'b': '𝐵',
          'c': '𝐶',
          'd': '𝐷',
          'e': '𝐸',
          'f': '𝐹',
          'g': '𝐺',
          'h': '𝐻',
          'i': '𝐼',
          'j': '𝐽',
          'k': '𝐾',
          'l': '𝐿',
          'm': '𝑀',
          'n': '𝑁',
          'o': '𝛩',
          'p': '𝑃',
          'q': '𝑄',
          'r': '𝑅',
          's': '𝑺',
          't': '𝑇',
          'u': '𝑈',
          'v': '𝑉',
          'w': '𝑊',
          'x': '𝑋',
          'y': '𝑌',
          'z': '𝑍', 
      }[v.toLowerCase()] || v
  }))
}
handler.help = ['زخرفة']
handler.tags = ['fun']
handler.command =  /^(زخرفة)$/i

export default handler
