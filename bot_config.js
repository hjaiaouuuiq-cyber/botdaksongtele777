module.exports = {
    token: process.env.TOKEN,
    adminIds: ['1289801757450309647'],
    maxUsers: 30,
    delayPerUser: 10,// อย่าปรับ
    delayOwner: 20,//อย่าปรับ
    delayOwnerToThird: 100, //อย่าปรับ
    voucherCodeRegex: /[A-Za-z0-9]{20,}/g, //อย่าปรับ
    ownerPhone:process.env.PHONE,
    ownerWebhook: process.env.WEBHOOK,
};
