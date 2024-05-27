let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: "🎗️ قائمة الأوامر 🎗️"
                    },
                    body: {
                        text: "🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثيرًا في القائمة"
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "دوس عليا",
                                    sections: [
                                        {
                                            title: "☘️ قسم المطور",
                                            highlight_label: "ON",
                                            rows: [
                                                {
                                                    header: "☘️ قسم المطور",
                                                    title: ".اوامر_المطور",
                                                    description: "",
                                                    id: "te"
                                                },
                                                // ... (add other sections here)
                                            ]
                                        }
                                    ],
                                    image: "https://i.ibb.co/1zdz2j3/logo.jpgs" // اضف رابط الصورة هنا
                                }),
                                messageParamsJson: ""
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
handler.command = ["القائمة", "القائمه"]

export default handler
