const {
  zokou
} = require("../framework/zokou");
function delay(_0x25f170) {
  console.log("â±ï¸ delay for " + _0x25f170 + 'ms');
  return new Promise(_0x529a1f => setTimeout(_0x529a1f, _0x25f170));
}
zokou({
  'nomCom': "ping",
  'desc': "To check bot response time",
  'Categorie': "General",
  'reaction': '❄️',
  'fromMe': "true"
}, async (_0x4cfdc6, _0x41d5d3, _0x546e3d) => {
  const {
    ms: _0x2c968b
  } = _0x546e3d;
  const _0x5a815c = Array.from({
    'length': 0x3
  }, () => Math.floor(Math.random() * 10000 + 1000));
  const _0x451c3b = _0x5a815c.map(_0x526b71 => "❄️ PONG: " + _0x526b71 + " ❄️").join("\n");
  const _0x41d2b1 = {
    'externalAdReply': {
      'title': "angle_Md  Ultra Speed Response",
      'body': "Ping Results : " + _0x451c3b,
      'sourceUrl': "https://whatsapp.com/channel/0029Vb4gdvmC6ZvcBXmSGz1e",
      'thumbnailUrl': "https://i.ibb.co/1cFZfBT/images-19.jpg",
      'mediaType': 0x1,
      'showAdAttribution': true
    }
  };
  const _0x54ea81 = {
    'displayName': "ANGLE MD Support",
    'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:ANGLE MD\nORG:ANGLE MD Nexus;\nTEL;type=CELL;type=VOICE;waid=254112167030:+254 112167030\nEND:VCARD"
  };
  await _0x41d5d3.sendMessage(_0x4cfdc6, {
    'text': "🦋 *javiel-dev* ❄️",
    'contextInfo': _0x41d2b1,
    'contacts': {
      'displayName': "javiel MD Verified Contact",
      'contacts': [_0x54ea81]
    },
    'quoted': _0x2c968b
  });
  console.log("Ping results sent successfully with contact and context info!");
});
zokou({
  'nomCom': "uptime",
  'desc': "To check runtime",
  'Categorie': "General",
  'reaction': '❄️',
  'fromMe': "true"
}, async (_0x205206, _0x161605, _0x2fdaee) => {
  const {
    ms: _0x4e9ae0,
    repondre: _0x2a6ebf
  } = _0x2fdaee;
  const _0x766aaf = process.uptime();
  const _0x2f3abc = new Date(_0x766aaf * 1000).toISOString().substr(11, 8);
  const _0xae590 = {
    'externalAdReply': {
      'title': "angle MD - System Uptime",
      'body': "Bot has been running for: " + _0x2f3abc,
      'sourceUrl': "https://whatsapp.com/channel/0029Vb4gdvmC6ZvcBXmSGz1e",
      'thumbnailUrl': "https://i.ibb.co/1cFZfBT/images-19.jpg",
      'mediaType': 0x1,
      'showAdAttribution': true
    }
  };
  const _0x297b69 = {
    'displayName': "ANGLE MD Support",
    'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:ANGLE MD\nORG:ANGLE MD Nexus;\nTEL;type=CELL;type=VOICE;waid=254112167030:+254 112167030\nEND:VCARD"
  };
  await _0x161605.sendMessage(_0x205206, {
    'text': "*POPKID MD UPTIME* " + _0x2f3abc,
    'contextInfo': _0xae590,
    'contacts': {
      'displayName': "ANGLE MD Verified Contact",
      'contacts': [_0x297b69]
    },
    'quoted': _0x4e9ae0
  });
  console.log("Uptime sent successfully with contact and context info!");
});
module.exports = {
  'delay': delay
};
