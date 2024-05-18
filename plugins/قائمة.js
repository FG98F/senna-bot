let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*قـائـمـة الـاوامــر*'
            },
            body: {
              text: '🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا ',
                    sections: [
                      {
                        title: 'أقسام البوت',
                        highlight_label: '𝙼𝚛 𝙷𝚊𝚖𝚣𝚊',
                        rows: [
                          {
                            header: 'معلومات البوت',
                            title: '.المطور',
                            description: '',
                            id: '/info'
                          },
                          {
                            header: 'قسم الاوامر',
                            title: '.الاوامر',
                            description: '',
                            id: '/menu'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['المهام']

export default handler
