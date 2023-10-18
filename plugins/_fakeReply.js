
import fetch from 'node-fetch';
export async function before(m, { conn }) {
   let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/1ZxrXKJ/avatar-contact.jpg');

  // Respuesta con enlace de WhatsApp
  global.rpl = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: bgp,
        mediaType: 'VIDEO',
        description: 'support group',
        title: packname,
        body: 'grupo de soporte',
        thumbnailUrl: pp,
        sourceUrl: bgp
      }
    }
  };
  
  // Respuesta con enlace de Canal de WhatsApp
  global.rcanal = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: fgcanal,
        mediaType: 'VIDEO',
        description: 'canal del grupo',
        title: packname,
        body: 'Canal de FG98',
        thumbnailUrl: pp,
        sourceUrl: fgcanal
      }
    }
  }

  // Respuesta con enlace de PayPal
  global.rpyp = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: fgpyp,
        mediaType: 'VIDEO',
        description: 'Donate',
        title: 'PayPal',
        body: 'ayuda a mantener el bot activo',
        thumbnailUrl: pp,
        sourceUrl: fgpyp
      }
    }
  };

  // Respuesta con enlace de Instagram
  global.rpig = {
    contextInfo: {
      externalAdReply: {
        mediaUrl: fgig,
        mediaType: 'VIDEO',
        description: 'Sigueme por Instagram',
        title: 'Instagram',
        body: 'sigueme por Instagram',
        thumbnailUrl: pp,
        sourceUrl: fgig
      }
    }
  };

  // Respuesta con enlace de YouTube
  global.rpyt = {
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: fgyt,
        mediaType: 'VIDEO',
        description: 'Suscribete: ' + fgyt,
        title: 'FG YouTube',
        body: 'aprende a crear tus propios bots',
        thumbnailUrl: pp,
        sourceUrl: fgyt
      }
    }
  }
  
  
  
}
