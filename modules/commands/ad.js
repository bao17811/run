module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vy",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Thông tin admin",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/246971082_1055063298658201_3469579188397640436_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=kTCO3ESOO3QAX9qTPBn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=3ceeb2cbbf717457e4c44fd20b85f63a&oe=61B1268F",
"https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/252332647_1924619311042344_8462387195116216336_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=tBk38ScNoFMAX_Fi3cf&_nc_oc=AQkTihcrdFizVJMmxJBBTA_PknqfFv-3zuecc42kXRFSyEPyTPhpiDnjNmVIPf2v4Y0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00c0965a2ad7f6312098d52459d51a9d&oe=61B35E49",
"https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/252607996_596077468488180_8352004499774102618_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=EZ1FYk1dCPMAX8rfSdv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=3c712395a64b42fb75350a4b4ab47381&oe=61B0D0B5",
"https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/250779829_573660560597135_8650595987590419141_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Wk_5Vylpnc8AX-K_ncd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=1bb20002b0a6dcfd17394a1111244d99&oe=61B1DDEC",
"https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/245604809_1354376338333690_9191709228215736085_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=WT-ooyttXuwAX-XWOQ7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=afaa2f7812ae8303bd7e13726401557f&oe=61B05360",
"https://cdn.fbsbx.com/v/t59.2708-21/249163522_424084209079503_37795479031690314_n.gif?_nc_cat=109&ccb=1-5&_nc_sid=041f46&_nc_ohc=bpSlvo7ZXx8AX-d8iSZ&_nc_ht=cdn.fbsbx.com&oh=563768010fa773012ea89db3e617b2cd&oe=618FF654",
"https://media.giphy.com/media/1gOykJJoWktIkf2yuO/giphy.gif",
"https://4.bp.blogspot.com/-yAExPAr7JeA/WDaBRVuJwxI/AAAAAAALb7I/Dbvda0KD5uECF3_SBjsvkl2_mqP9_BweQCLcB/s1600/AS000834_17.gif",
  ];
  var callback = () => api.sendMessage({body:`梁ADMIN梁
  👀 Tên: Nguyễn Tiến Dũng
  ❎ Tuổi: 16+
  👤 Giới tính: Nam
  🙄 Sinh ngày: 10/09/2006
  💫 Chiều cao / cân nặng: m70/ 6xkg
  💘 Mối quan hệ: Độc Thân
  😎 Quê quán: Hưng yên
  🤔 Nơi ở: Vũng tàu
  ♓ Cung: cung trắng có chú cuội
👫 Gu: lo lắng quan tâm vậy là đủ :)))
  🌸 Tính cách: Là một con người với niềm đam mê thử thách bản thân và muốn vượt qua giới hạn bản thân để đạt được mục tiêu của mình <3
  📱 Facebook: https://www.facebook.com/nguyentiendung10092006
📢 Lưu ý cho các qtv và tv trong box: 
- Vui lòng không spam khi sử dụng để tránh die bot
- Không sử dụng lệnh nhiều của lệnh đó
- Đừng chửi bot vì nó được lập trình tự động rời box
- Đừng report bot vì nó cute lắm ><
- Nếu bot ko hoạt động hay bị lỗi hay liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình
=> Yêu mọi người nhiều lắm <3 hãy đồng hành cùng với bot và mình nhé <3
------------
✔Donate:
💳MB: ....
💳VIB: Đã bẻ thẻ :)
📲MoMo: ....

----Vũ----`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
 