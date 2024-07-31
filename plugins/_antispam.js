import { performance } from 'perf_hooks'

// الوظيفة دي بتستخدم علشان تمنع المستخدمين من إرسال رسائل كتير في وقت قليل في تطبيق الدردشة أو البوت.

export async function before(m) {
  // الحصول على معلومات عن المستخدمين والدردشات من البيانات العامة.
  const users = global.db.data.users
  const chats = global.db.data.chats

  // فحص عدة شروط لتحديد ما إذا كانت التدابير المضادة للإزعاج لازم تتطبق ولا لا.

  // لو مضاد الإزعاج مقفول في الدردشة دي، أو لو الرسالة جاية من البوت نفسه،
  // أو لو نوع الرسالة هو رسالة نظام أو تحديث استفتاء، اعمل لا شيء واطلع من الوظيفة.
  if (
    !chats[m.chat].antiSpam ||
    m.isBaileys ||
    m.mtype === 'protocolMessage' ||
    m.mtype === 'pollUpdateMessage' ||
    m.mtype === 'reactionMessage'
  ) {
    return
  }

  // لو مفيش محتوى للرسالة، أو لو المرسل محظور، أو لو الدردشة محظورة،
  // اعمل لا شيء واطلع من الوظيفة.
  if (
    !m.msg ||
    !m.message ||
    m.key.remoteJid !== m.chat ||
    users[m.sender].banned ||
    chats[m.chat].isBanned
  ) {
    return
  }

  // إنشاء أو الوصول إلى كائن 'spam' للمرسل لمتابعة بيانات الإزعاج.
  this.spam = this.spam || {}
  this.spam[m.sender] = this.spam[m.sender] || { count: 0, lastspam: 0 }

  // الحصول على الوقت الحالي بالميلي ثانية.
  const now = performance.now()

  // حساب فرق الوقت من آخر رسالة من المرسل.
  const timeDifference = now - this.spam[m.sender].lastspam

  // لو فرق الوقت أقل من 10 ثواني، يبقى المرسل بيبعت رسائل بسرعة.
  if (timeDifference < 10000) {
    // زيادة عدد الإزعاج للمرسل.
    this.spam[m.sender].count++

    // لو عدد الإزعاج للمرسل وصل لـ 5 أو أكتر، يتم حظر المرسل وتحديد فترة تهدئة لـ 5 ثواني.
    if (this.spam[m.sender].count >= 5) {
      users[m.sender].banned = true
      this.spam[m.sender].lastspam = now + 5000

      // جدولة مهلة لإلغاء الحظر عن المستخدم وإعادة تعيين عدد الإزعاج بعد 5 ثواني.
      setTimeout(() => {
        users[m.sender].banned = false
        this.spam[m.sender].count = 0
        m.reply(`✅ *فترة التهدئة انتهت*\nممكن تبعت رسائل تاني.`)
      }, 5000)

      // إخطار المرسل بالإزعاج ومدة فترة التهدئة المتبقية.
      const message =
        m.mtype
          .replace(/message$/i, '')
          .replace('audio', m.msg.ptt ? 'PTT' : 'audio')
          .replace(/^./, v => v.toUpperCase()) || 'Unknown'
      return m.reply(
        `❌ *من فضلك متبعتش ${message} كتير*\nانتظر لمدة ${Math.ceil((this.spam[m.sender].lastspam - now) / 1000)} ثانية`
      )
    }
  } else {
    // لو فرق الوقت أكبر من أو يساوي 10 ثواني، إعادة تعيين عدد الإزعاج للمرسل.
    this.spam[m.sender].count = 0
  }

  // تحديث توقيت 'lastspam' للمرسل إلى الوقت الحالي.
  this.spam[m.sender].lastspam = now
}