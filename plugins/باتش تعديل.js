import fs from 'fs';
import path from 'path';

let modifyFile = async (filename, newData) => {
    let filePath = path.join('plugins', filename);

    // التحقق من وجود الملف أولاً
    try {
        await fs.promises.access(filePath, fs.constants.F_OK);
    } catch (err) {
        throw new Error(`الملف ${filename} غير موجود.`);
    }

    // قراءة المحتوى الحالي للملف
    try {
        let currentData = await fs.promises.readFile(filePath, 'utf8');
        // استبدال النص القديم بالنص الجديد
        let updatedData = currentData.replace(/.*/, newData);

        // كتابة البيانات الجديدة إلى الملف
        await fs.promises.writeFile(filePath, updatedData, 'utf8');
        console.log(`تم تعديل الملف ${filename} بنجاح.`);
    } catch (err) {
        console.error(`فشل في تعديل الملف ${filename}: ${err.message}`);
        throw err;
    }
};

let handler = async (m, { isROwner, usedPrefix, command, text }) => {
    await m.reply(global.wait);
    if (!isROwner) return;

    // التحقق من وجود نص الملف واسم الملف
    if (!text) {
        throw `يرجى تحديد اسم الملف المراد تعديله والنص الجديد، مثال:\n${usedPrefix + command} example.js <النص الجديد>`;
    }

    // فصل اسم الملف والنص الجديد من النص المدخل
    let parts = text.split(' ');
    if (parts.length < 2) {
        throw `يرجى تحديد اسم الملف والنص الجديد، مثال:\n${usedPrefix + command} example.js <النص الجديد>`;
    }
    
    let filename = parts[0] + '.js';
    let newData = parts.slice(1).join(' ');

    try {
        await modifyFile(filename, newData);
        m.reply(`تم تعديل الملف ${filename} بنجاح.`);
    } catch (e) {
        console.error(`حدث خطأ أثناء تعديل الملف ${filename}: ${e.message}`);
        m.reply(`حدث خطأ أثناء تعديل الملف ${filename}: ${e.message}`);
    }
};

handler.help = ['editplugin'];
handler.tags = ['owner'];
handler.command = /^(editplugin|ep|باتش-تعديل)$/i;
handler.rowner = true;

export default handler;

