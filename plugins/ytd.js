let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command,
    isPrems,
    isOwner
}) => {
    if (!args[0]) return m.reply('الرابط؟')
    const sections = [{
            title: "🎙️ الصوت",
            rows: [{
                    title: "احصل على الصوت",
                    rowId: `${usedPrefix}getaud ${args[0]} audio`
                },
                {
                    title: "يوتيوب صوت",
                    rowId: `${usedPrefix}yta ${args[0]}`
                },
                {
                    title: "يوتيوب صوت نعم",
                    rowId: `${usedPrefix}yta ${args[0]} yes`
                }
            ]
        },
        {
            title: "🎥 الفيديو",
            rows: [{
                    title: "احصل على فيديو 1080p",
                    rowId: `${usedPrefix}getvid ${args[0]} 1080`
                },
                {
                    title: "احصل على فيديو 720p",
                    rowId: `${usedPrefix}getvid ${args[0]} 720`
                },
                {
                    title: "احصل على فيديو 480p",
                    rowId: `${usedPrefix}getvid ${args[0]} 480`
                },
                {
                    title: "احصل على فيديو 360p",
                    rowId: `${usedPrefix}getvid ${args[0]} 360`
                },
                {
                    title: "يوتيوب Mp4",
                    rowId: `${usedPrefix}ytmp4 ${args[0]}`
                },
                {
                    title: "يوتيوب Mp4 نعم",
                    rowId: `${usedPrefix}ytmp4 ${args[0]} yes`
                }
            ]
        },
    ]

    const listMessage = {
        text: `${m.chat}  يرجى تحديد نوع الوسائط الخاص بك...`,
        footer: ,
        title: " 📥 تنزيل الفيديو من يوتيوب",
        buttonText: "اضغط هنا !",
        sections
    }

    return conn.sendMessage(m.chat, listMessage, {
        quoted: fakes
    })
}

handler.help = ['ytd']
handler.tags = ['downloader']
handler.command = /^ytd(mp[34]|[av])?$/i
handler.exp = 3

export default handler
