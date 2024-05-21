let handler = async (m, { conn, args, usedPrefix, command }) => {
  // إرسال الصورة والقائمة معًا
  await conn.sendMessage(m.chat, {
    image: { url: "https://i.ibb.co/dG6rm49/fg-logo.png" },
    caption: "🛡️ قائمة الأوامر",
    footer: "🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة",
    buttons: [
      {
        buttonId: "single_select",
        buttonText: { displayText: "اضغط هنا" },
        type: 1
      }
    ],
    headerType: 4
  })

  // إرسال القائمة
  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "*قـائـمـة الاوامــر*"
          },
          body: {
            text: "🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة"
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                  title: "اضغط هنا",
                  sections: [
                    {
                      title: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕",
                      highlight_label: "𝙼𝚛 𝙷𝚊𝚖𝚣𝚊",
                      rows: [
                        {
                          header: "معلومات البوت",
                          title: ".المطور",
                          description: "",
                          id: "/info"
                        },
                        {
                          header: "قسم الاوامر",
                          title: ".الاوامر",
                          description: "",
                          id: "/menu"
                        }
                      ]
                    }
                  ]
                }),
                messageParamsJson: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕"
              }
            ]
          }
        }
      }
    }
  }, {})
}

handler.help = ["info"]
handler.tags = ["main"]
handler.command = ["لسته"]

export default handler
