import fs from 'fs';
import path from 'path';

let deleteFile = async (filename) => {
    let filePath = path.join('plugins', filename); // المسار الذي يحتوي على الملفات

    try {
        fs.unlinkSync(filePath);
        console.log(`تم حذف الملف ${filename} بنجاح.`);
    } catch (err) {
        console.error(`فشل في حذف الملف ${filename}: ${err.message}`);
        throw err;
    }
};

let handler = async (m, { isROwner, usedPrefix, command, text }) => {
    await m.reply(global.wait);
    if (!isROwner) return;

    if (!text) {
        throw `يرجى تحديد اسم الملف المراد حذفه، مثال:\n${usedPrefix + command} example.js`;
    }

    try {
        // حذف الملف
        await deleteFile(text + '.js');
        
        m.reply(`تم حذف الملف ${text}.js بنجاح.`);
    } catch (e) {
        console.error(`حدث خطأ أثناء حذف الملف ${text}.js: ${e.message}`);
        m.reply(`حدث خطأ أثناء حذف الملف ${text}.js: ${e.message}`);
    }
};

handler.help = ['deleteplugin'];
handler.tags = ['owner'];
handler.command = /^(deleteplugin|dp|باتش-حذف)$/i;
handler.rowner = true;

export default handler;
