const Discord = require("discord.js");
const Insta = require('@androz2091/insta.js');

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS, //Avoir accés a tout les évements global d'un serveur
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    ]
});

const Instagram = new Insta.Client();
const SkwadDeLuxe = "340282366841710300949128158272395645237";
const Olviier = "340282366841710300949128187833448290064";
let verificationConnection = [0,0,0,0,0,0,0,0];
const prefix = "!";

Instagram.on('connected', () => {
    console.log(`Connecter en tant que ${Instagram.user.username} sur instagram`);
});

Instagram.on("messageCreate", (message) => {
    if (message.author.id === Instagram.user.id) return

    message.markSeen();
    if(message.content === "!ping"){
        console.log(message);
        message.reply("!pong");
    }

    if(message.chatID === SkwadDeLuxe && message.content === prefix + "help"){
        Instagram.fetchChat(SkwadDeLuxe).then((user) => user.sendMessage(`Les commandes disponibles : \n - ${prefix}ping (pong)\n - ${prefix}help (toutes les commandes)`));
    }
})

Client.on("ready", () => {
    console.log("2B est prête");
});


Client.on("messageCreate", message => {
    if(message.author.bot) return;

    //ping discord
    if(message.content === prefix + "ping"){
        console.log("pong");
        message.reply("pong !");
    }
});

Client.on("voiceStateUpdate", (newVoiceState) => {
    console.log(newVoiceState);

    if(!newVoiceState.channel){
        var userConnected;
        switch (newVoiceState.id){
            case "282530418551422976":

                if(verificationConnection[0] === 0){
                    userConnected = "Olivier";
                    console.log(`${userConnected} est connecter a un salon vocal`);
                    Instagram.fetchChat(SkwadDeLuxe).then((user) => user.sendMessage(`|| ${userConnected} est connecter a un salon vocal ||`));
                    verificationConnection[0] = 1;
                } else {
                    setTimeout(() => {verificationConnection[0] = 0}, 600000) // 10 minutes
                }
                break;

            case "459936476382363649":

                if(verificationConnection[1] === 0){
                    userConnected = "Sohan";
                    console.log(`${userConnected} est connecter a un salon vocal`);
                    Instagram.fetchChat(SkwadDeLuxe).then((user) => user.sendMessage(`|| ${userConnected} est connecter a un salon vocal ||`));
                    verificationConnection[1] = 1;
                } else {
                    setTimeout(() => {verificationConnection[1] = 0}, 600000) // 10 minutes
                }
                break;

            case "611911196551020546":

                if(verificationConnection[2] === 0){
                    userConnected = "Lucas";
                    console.log(`${userConnected} est connecter a un salon vocal`);
                    Instagram.fetchChat(SkwadDeLuxe).then((user) => user.sendMessage(`|| ${userConnected} est connecter a un salon vocal ||`));
                    verificationConnection[2] = 1;
                } else {
                    setTimeout(() => {verificationConnection[2] = 0}, 600000) // 10 minutes
                }
                break;

            case "703276903649509405":

                if(verificationConnection[3] === 0){
                    userConnected = "Lucie";
                    console.log(`${userConnected} est connecter a un salon vocal`);
                    Instagram.fetchChat(SkwadDeLuxe).then((user) => user.sendMessage(`|| ${userConnected} est connecter a un salon vocal ||`));
                    verificationConnection[3] = 1;
                } else {
                    setTimeout(() => {verificationConnection[3] = 0}, 600000) // 10 minutes
                }
                break;

            case "405444053891547158":

                if(verificationConnection[4] === 0){
                    userConnected = "Clément";
                    console.log(`${userConnected} est connecter a un salon vocal`);
                    Instagram.fetchChat(SkwadDeLuxe).then((user) => user.sendMessage(`|| ${userConnected} est connecter a un salon vocal ||`));
                    verificationConnection[4] = 1;
                } else {
                    setTimeout(() => {verificationConnection[4] = 0}, 600000) // 10 minutes
                }
                break;
                
            case "687770866783617024":

                if(verificationConnection[5] === 0){
                    userConnected = "Bryan";
                    console.log(`${userConnected} est connecter a un salon vocal`);
                    Instagram.fetchChat(SkwadDeLuxe).then((user) => user.sendMessage(`|| ${userConnected} est connecter a un salon vocal ||`));
                    verificationConnection[5] = 1;
                } else {
                    setTimeout(() => {verificationConnection[5] = 0}, 600000) // 10 minutes
                }
                break;

            case "867019634779881483":

                if(verificationConnection[6] === 0){
                    userConnected = "Hélina";
                    console.log(`${userConnected} est connecter a un salon vocal`);
                    Instagram.fetchChat(SkwadDeLuxe).then((user) => user.sendMessage(`|| ${userConnected} est connecter a un salon vocal ||`));
                    verificationConnection[6] = 1;
                } else {
                    setTimeout(() => {verificationConnection[6] = 0}, 600000) // 10 minutes
                }
                break;

            default:

                if(verificationConnection[7] === 0){
                    userConnected = "Un gars";
                    console.log(`${userConnected} est connecter a un salon vocal`);
                    Instagram.fetchChat(SkwadDeLuxe).then((user) => user.sendMessage(`|| ${userConnected} est connecter a un salon vocal ||`));
                    verificationConnection[7] = 1;
                } else {
                    setTimeout(() => {verificationConnection[7] = 0}, 600000) // 10 minutes
                }
        }
    }
})

Client.login(process.env.TOKEN);
Instagram.login(process.env.LOGIN_INSTAGRAM, process.env.PASSWORD_INSTAGRAM);