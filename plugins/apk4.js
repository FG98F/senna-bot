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
    if (!lister.includes(feature)) return m.reply("*Example:*\n.apk4all search|vpn\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "search") {
            if (!inputs) return m.reply("Input query link\nExample: .apk4all search|vpn")
            await m.reply(wait)
            try {
                let res = await searchApk4all(inputs)
                let teks = res.map((item, index) => {
                    return `🔍 *[ RESULT ${index + 1} ]*

📰 *Title:* ${item.title}
🔗 *Url:* ${item.titleUrl}
🖼️ *Image:* ${item.imageUrl}
⭐️ *Rating:* ${item.rating}
👀 *Views:* ${item.views}
📊 *Average:* ${item.average}
📅 *Date:* ${item.updateDate}`

                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply(eror)
            }
        }

        if (feature == "app") {
            if (!inputs) return m.reply("Input query link\nExample: .apk4all app|link")
            try {
                let resl = await getApk4all(inputs)
                
                let cap = `📌 *Title:* ${resl.info.title}
🔖 *Version:* ${resl.info.currentVersion}
🔄 *Update:* ${resl.info.latestUpdate}
⭐️ *Rating:* ${resl.info.contentRating}
📋 *Requirements:* ${resl.info.requirements}
📏 *Size:* ${resl.download.size}
📚 *Guide:* ${resl.download.guide}
🔗 *Link Full:* ${encodeURI(resl.download.linkFull)}

${wait}`
                await conn.sendFile(m.chat, resl.info.ogImageUrl, "", cap, m)
                await conn.sendFile(m.chat, resl.download.linkMod, resl.info.title, null, m, true, {
                    quoted: m,
                    mimetype: "application/vnd.android.package-archive"
                })
            } catch (e) {
                await m.reply(eror)
            }
        }
    }
}
handler.help = ["apk4all"]
handler.tags = ["internet"]
handler.command = /^(apk4)$/i
export default handler

/* New Line */
async function searchApk4all(query) {
  const url = `https://apk4all.io/search/${query}`; // Ganti dengan URL yang sesuai

  try {
    const response = await fetch(url);
    const data = await response.text();
    const $ = cheerio.load(data);
    const articles = [];

    $('article').each((index, element) => {
      const $article = $(element);
      const title = $article.find('.entry-title a').text().trim();
      const titleUrl = $article.find('.entry-title a').attr('href');
      const imageUrl = $article.find('.apk-dl .icon img').attr('src');
      const rating = $article.find('.details-rating .average.rating').text().trim();
      const views = $article.find('.details-rating .details-delimiter').eq(1).text().replace(/\n|\|\s|\t/g, '').trim();
      const average = $article.find('.details-rating .stars').attr('title').trim();
      const updateDate = $article.find('.details-rating .update-date').next().text().trim();

      articles.push({ title, titleUrl, imageUrl, rating, average, views, updateDate });
    });

    return articles;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
}

async function getApk4all(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const info = {
      title: $('.dllinks .da').attr('title'),
      link: $('.dllinks .da').attr('href'),
      ogImageUrl: $('meta[property="og:image"]').attr('content'),
      developer: $('td:contains("Developer:")').next().text().trim(),
      currentVersion: $('td:contains("Current Version:")').next().text().trim(),
      latestUpdate: $('td:contains("Latest Update:")').next().find('time').text().trim(),
      contentRating: $('td:contains("Content Rating:")').next().text().trim(),
      getItOn: $('td:contains("Get it on:")').next().find('a').attr('href'),
      requirements: $('td:contains("Requirements:")').next().find('a').text().trim(),
      appID: $('td:contains("App ID:")').next().text().trim()
    };

    const response2 = await fetch(info.link);
    const html2 = await response2.text();
    const $two = cheerio.load(html2);

    const download = {
      title: $two('.box h1.title').text().trim(),
      linkFull: $two('.box p.field a.button.is-danger').attr('href'),
      linkMod: $two('.box div.buttons div.field p.control a.button.is-primary').attr('href'),
      size: $two('.box div.field.has-addons p.control.is-expanded a.button.is-primary').text().trim(),
      qr: $two('.box div.field.has-addons p.control a.zb.button.is-primary img.qr').attr('src'),
      guide: $two('.box div.block.content.notification.is-info.is-light.container').text().trim()
    };

    return { info, download };
  } catch (error) {
    throw new Error('Error fetching additional information:', error);
  }
};
