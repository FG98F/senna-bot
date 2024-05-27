let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, image, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: "🎗️ قـائـمـة الـاوامــر🎗️"
                    },
                    body: {
                        text: "🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة"
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "دوس عليا",
                                    sections: [
                                        {
                                            title: "List",
                                            highlight_label: "ON",
                                            rows: [
                                                {
                                                    header: "☘️ قـسـم الـمطور",
                                                    title: ".اوامر_المطور",
                                                    description: "",
                                                    id: "te"
                                                },
                                                {
                                                    header: "☘️ قـسـم الـجروب",
                                                    title: ".اوامر_الجروب",
                                                    description: "",
                                                    id: "te"
                                                },
                                                {
                                                    header: "☘️ قـسـم الـتحميل",
                                                    title: ".اوامر_التحميل",
                                                    description: "",
                                                    id: "te"
                                                },
                                                {
                                                    header: "☘️ قـسـم الـترفيه",
                                                    title: ".اوامر_الترفيه",
                                                    description: "",
                                                    id: "te"
                                                },
                                                {
                                                    header: "☘️ قـسـم الـتحميل",
                                                    title: ".اوامر_التحميل",
                                                    description: "",
                                                    id: "te"
                                                },
                                                {
                                                    header: "☘️ قـسـم الـدين",
                                                    title: ".اوامر_الدين",
                                                    description: "",
                                                    id: "te"
                                                },
                                                {
                                                    header: "☘️ كل الاوامر",
                                                    title: ".كل_الاوامر",
                                                    description: "",
                                                    id: "te"
                                                },
                                                {
                                                    header: "☘️ قـسـم الـصوتيات",
                                                    title: ".اوامر_الصوتيات",
                                                    description: "",
                                                    id: "te"
                                                }
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
