import cheerio from 'cheerio';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!global.db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗معلومة❗] التفتيش على المحتوى البالغين +18 معطل، لو في جروب، شغل modohorny*';
  if (!text) throw '*[❗] لازم تكتب اسم البحث عن الهنتاي اللي عاوزه، مثال: ' + usedPrefix + command + ' miku*';

  const searchResults = await searchHentai(text);

  let teks = searchResults.result.map((v, i) => `
${i + 1}. *_${v.title}_*
↳ 📺 *_المشاهدات:_* ${v.views}
↳ 🎞️ *_الرابط:_* ${v.url}`).join('\n\n');

  let randomThumbnail;

  if (searchResults.result.length > 0) {
    const randomIndex = Math.floor(Math.random() * searchResults.result.length);
    randomThumbnail = searchResults.result[randomIndex].thumbnail;
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
    teks = '*[❗] مفيش نتائج للبحث اللي كتبتو*';
  }

  conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m);
};

handler.command = /^(بحثهنتاي|بحث-هنتاي)$/i;
export default handler;

async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get('https://hentai.tv/?s=' + search).then(async ({ data }) => {
      const $ = cheerio.load(data);
      const result = {};
      const res = [];
      result.coder = 'rem-comp';
      result.result = res;
      result.warning = 'ممنوع تمامًا تعيد استخدام الكود ده، حقوق الطبع © 2022 بواسطة rem-comp';
      $('div.flex > div.crsl-slde').each(function (a, b) {
        const _thumbnail = $(b).find('img').attr('src');
        const _title = $(b).find('a').text().trim();
        const _views = $(b).find('p').text().trim();
        const _url = $(b).find('a').attr('href');
        const hasil = { thumbnail: _thumbnail, title: _title, views: _views, url: _url };
        res.push(hasil);
      });
      resolve(result);
    }).catch((err) => {
      console.log(err);
      reject(err);
    });
  });
}