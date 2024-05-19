import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

    let lister = [
        "search",
        "app"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    if (!lister.includes(feature)) return m.reply("ex : apps search|lite \n" + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "search") {
            if (!inputs) return m.reply("ex : \n .apps search|lite")
            await m.reply(wait)
            try {
                let res = await searchHippo(inputs)
                let teks = res.map((item, index) => {
                    return `🔍 *[ RESULT ${index + 1} ]*

📌 *title:* ${item.title}
🔗 *link:* ${item.link}
🖼️ *image:* ${item.image}
🎯 *programTitle:* ${item.programTitle}
🔗 *programLink:* ${item.programLink}
👨‍💻 *developer:* ${item.developer}
📄 *license:* ${item.license}
📃 *summary:* ${item.summary}`
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply(eror)
            }
        }
        if (feature == "app") {
            if (!inputs) return m.reply("Input query link\nExample: .filehippo search|vpn")
            await m.reply(wait)
            try {
                let res = await getHippo(inputs)
                let teks = res.map((item, index) => {
                    return `🔍 *[ RESULT ${index + 1} ]*

📌 *title:* ${item.name}
🖼️ *image:* ${item.icon_url}
🔗 *url:* ${item.html_url}
⬇️ *downloadLink:* ${item.download_url}
📦 *app:* ${item.app_name}
📱 *deviceInfo:* ${item.information}
🤖 *version:* ${item.version}
📋 *mime:* ${item.mimetype}
`

                }).filter(v => v).join("\n\n________________________\n\n")
                await conn.sendFile(m.chat, res[0].icon_url || logo, "", teks, m)
                await conn.sendFile(m.chat, res[0].download_url || logo, res[0].name || 'Tidak diketahui', null, m, true, {
                    quoted: m,
                    mimetype: res[0].mimetype
                })
            } catch (e) {
                await m.reply(eror)
            }
        }

    }
}
handler.help = ["filehippo"]
handler.tags = ["internet"]
handler.command = /^(apps)$/i
export default handler

/* New Line */
async function searchHippo(app_name) {
    const url = 'https://filehippo.com/search/?q=' + app_name; // Ganti dengan URL halaman yang ingin Anda scraping

    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);
        const programs = await Promise.all(
            $('.list-programs__item').map(async (index, element) => {
                const title = $('.card-program__title', element).text().trim();
                const link = $('.card-program', element).attr('href');
                const image = $('.media__image img', element).attr('src');
                const programTitle = $('.card-program__title', element).text().trim();
                const programLink = $('.card-program', element).attr('href');
                const developer = $('.card-program__developer', element).text().trim();
                const license = $('.card-program__license', element).text().trim();
                const summary = $('.card-program__summary', element).text().trim();

                if (title && link && image && programTitle && programLink && developer && license && summary) {
                    return {
                        title,
                        link,
                        image,
                        programTitle,
                        programLink,
                        developer,
                        license,
                        summary
                    };
                }
            }).get()
        );

        return programs.filter(Boolean);
    } catch (error) {
        throw new Error(error);
    }
}

async function getHippo(app_name) {
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763'
    };
    const urls = {
        information: (app_name.endsWith('/') ? app_name : app_name + '/'),
        download: (app_name.endsWith('/') ? app_name : app_name + '/') + 'post_download/'
    };

    const [html, downloadHtml] = await Promise.all(Object.values(urls).map(url => fetch(url, {
        headers
    }).then(response => response.text())));

    const $ = cheerio.load(html);
    const hippo_information_name = $('body > div.page > div:nth-child(2) > div > div > div > section.program-header-content > div.program-header-content__main > div > div.media__body > h1').text();
    const hippo_information = $('body > div.page > div:nth-child(2) > div > div > div > section.mb-l > article > p:nth-child(3)').text();
    const hippo_version = $('body > div.page > div:nth-child(2) > div > div > div > section.program-header-content > div.program-header-content__main > div > div.media__body > p.program-header__version').text();
    const hippo_icon_url = $('body > div.page > div:nth-child(2) > div > div > div > section.program-header-content > div.program-header-content__main > div > div.media__image > img').attr('src');
    const hippo_download_url = cheerio.load(downloadHtml)('script[data-qa-download-url]').attr('data-qa-download-url');

    const mimetype = await getMimeTypeFromUrl(hippo_download_url);

    return [{
        name: hippo_information_name,
        version: hippo_version,
        information: hippo_information,
        html_url: urls.information,
        download_url: hippo_download_url,
        icon_url: hippo_icon_url,
        app_name,
        mimetype,
    }];
}

async function getMimeTypeFromUrl(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const contentType = response.headers.get('content-type');
            return contentType;
        } else {
            throw new Error('Failed to fetch URL');
        }
    } catch (error) {
        console.error(error);
    }
}
