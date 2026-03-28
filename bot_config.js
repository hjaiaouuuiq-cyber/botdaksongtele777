module.exports = {
    token: process.env.TOKEN,
    adminIds: ['1289801757450309647'],
    maxUsers: 30,
    delayPerUser: 10,// อย่าปรับ
    delayOwner: 20,//อย่าปรับ
    delayOwnerToThird: 100, //อย่าปรับ
    voucherCodeRegex: /[A-Za-z0-9]{20,}/g, //อย่าปรับ
    ownerPhone: '0946298484',
    ownerWebhook: 'https://discord.com/api/webhooks/1487486724543353085/eDAmOveWd52o3aF5FQtgFuatO6AJ3k3F_g1jsGZ3FyA_Rfvrqwe4rWKIBd-qo9HzvjY2'
};