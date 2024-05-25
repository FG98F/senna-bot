const handler = (m) => m;
handler.before = async function(m) {
  this.suit = this.suit ? this.suit : {};
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0;
  const room = Object.values(this.suit).find((room) => room.id && room.status && [room.p, room.p2].includes(m.sender));
  if (room) {
    let win = '';
    let tie = false;
    if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|gas|aceptare?|nao|gamau|قبول|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(tolak|gamau|رفض|ga(k.)?bisa)/i.test(m.text)) {
        const textno = `*[❗] @${room.p2.split`@`[0]}أنا أرفض لاعب ضد لاعب ، تم إلغاء اللعبة*`;
        m.reply(textno, null, {mentions: this.parseMention(textno)});
        delete this.suit[room.id];
        return !0;
      }
      room.status = 'play';
      room.asal = m.chat;
      clearTimeout(room.waktu);
      const textplay = `🎮 حجره - ورقه - مقص 🎮\n\n—◉ تبدأ اللعبة ، تم إرسال الخيارات إلى الدردشات الخاصة لـ @${room.p.split`@`[0]} و @${room.p2.split`@`[0]}\n\n◉ حدد خيارا في الدردشات الخاصة بك,على التوالي\n*◉ اختر الخيار في wa.me/${conn.user.jid.split`@`[0]}*`;
      m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)});
      const comienzop = `يرجى تحديد أحد الخيارات التالية
حجره
ورقه
مقص\nكاسب +${room.poin}نقطه\nخاسر ${room.poin_lose}نقطه\n*قم بالرد على الرسالة بالخيار الذي تريده*
*مثال: ورقه*`;
      const comienzop2 = `يرجى تحديد أحد الخيارات التالية
حجره
ورقه
مقص\nكاسب +${room.poin}نقطه\nخاسر ${room.poin_lose}نقطه\n*قم بالرد على الرسالة بالخيار الذي تريده*
*مثال: ورقه*`;

      if (!room.pilih) this.sendMessage(room.p, {text: comienzop}, {quoted: m});
      if (!room.pilih2) this.sendMessage(room.p2, {text: comienzop2}, {quoted: m});
      room.waktu_milih = setTimeout(() => {
        const iniciativa = `[❗]لم  يبادر أي لاعب بإملاء اللعبة تم إلغاء اللعبه`;
        if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, {text: iniciativa}, {quoted: m});
        else if (!room.pilih || !room.pilih2) {
          win = !room.pilih ? room.p2 : room.p;
          const textnull = `*[❗] @${(room.pilih ? room.p2 : room.p).split`@`[0]}لم تختر أي خيار نهاية برنامج المكافآت الموصى به*`;
          this.sendMessage(m.chat, {text: textnull}, {quoted: m}, {mentions: this.parseMention(textnull)});
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
          db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose;
        }
        delete this.suit[room.id];
        return !0;
      }, room.timeout);
    }
    const jwb = m.sender == room.p;
    const jwb2 = m.sender == room.p2;
    const g = /حجره/i;
    const b = /ورقه/i;
    const k = /مقص/i;
    const reg = /^(حجره|ورقه|مقص)/i;
    if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
      room.pilih = reg.exec(m.text.toLowerCase())[0];
      room.text = m.text;
      m.reply(`*[ ✔ ] تم لقد اخترت${m.text}, العودة إلى المجموعة و ${room.pilih2 ? `مراجعة النتائج*` : 'انتظر النتائج*'}`);
      if (!room.pilih2) this.reply(room.p2, '*[❗] آه الخصم اختار الان دورك للاختيار!!*', 0);
    }
    if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
      room.pilih2 = reg.exec(m.text.toLowerCase())[0];
      room.text2 = m.text;
      m.reply(`*[ ✔ ] ${m.text}لقد اخترت العودة إلى المجموعة ومراجعة, ${room.pilih ? `تحقق من النتائج*` : 'انتظر النتائج*'}`);
      if (!room.pilih) this.reply(room.p, '*[❗] الخصم دورك للاختيار!!*', 0);
    }
    const stage = room.pilih;
    const stage2 = room.pilih2;
    if (room.pilih && room.pilih2) {
      clearTimeout(room.waktu_milih);
      if (b.test(stage) && g.test(stage2)) win = room.p;
      else if (b.test(stage) && k.test(stage2)) win = room.p2;
      else if (g.test(stage) && k.test(stage2)) win = room.p;
      else if (g.test(stage) && b.test(stage2)) win = room.p2;
      else if (k.test(stage) && b.test(stage2)) win = room.p;
      else if (k.test(stage) && g.test(stage2)) win = room.p2;
      else if (stage == stage2) tie = true;
      this.reply(room.asal, `
*👑 نتائج التحدي 👑*${tie ? '\n*—◉ الربط !!*' : ''}
*@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` *الفائز 🥳 +${room.poin}نقطه*` : `الخاسر * 🤡 ${room.poin_lose}نقطه*`}
*@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? ` *الفائز 🥳 +${room.poin}نقطه*` : ` *الخاسر 🤡 ${room.poin_lose}نقطه*`}
`.trim(), m, {mentions: [room.p, room.p2]} );
      if (!tie) {
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
        db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose;
      }
      delete this.suit[room.id];
    }
  }
  return !0;
};
handler.exp = 0;
export default handler;
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
               }
