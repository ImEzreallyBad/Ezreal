const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const Hype = client.emojis.find(emoji => emoji.name === "Hype");
const ByeGuys = client.emojis.find(emoji => emoji.name === "ByeGuys");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'I love y-ahhhh!',
        }
    });
});
 
let warns = {}
module.exports.run = async (bot, message, args) => {
    }
 
client.on('message', msg => {
    // Prevent bot from responding to its own messages
    if (msg.author == client.user) {
        return;
    }
 
    if (msg.author.bot == true) {
        return;
    }
   
	
	if (msg.content.indexOf ( "nigger" ) > -1) {
		msg.delete ();
		msg.channel.send( "`If I were you, I wouldn't use that word.`");
    }
    
    if (msg.content.indexOf ( "nigga" ) > -1) {
		msg.delete ();
		msg.channel.send( "`If I were you, I wouldn't use that word.`");
    }

    if (msg.content.indexOf ( "kys" ) > -1) {
		msg.delete ();
		msg.channel.send( "`If I were you, I wouldn't use that word.`");
    }
    
    if (msg.content.indexOf ( "niggur" ) > -1) {
		msg.delete ();
		msg.channel.send( "`If I were you, I wouldn't use that word.`");
	}
		
    let prefix = config.prefix;
    if (msg.content == prefix + 'roll') {
        const randomNumber = Math.floor(Math.random() * 6) + 1  
        msg.channel.send(msg.author.username + '#' + msg.author.discriminator + ' `just rolled` ' + randomNumber);
    }
   
    if (msg.content.startsWith(prefix + "poke")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`Mention someone to poke first.`")
            return
        }
        msg.channel.send("**" + member + "**" + " you have been poked by " + "**" + msg.author.username + "**" + " <:Hype:484407265147879425> ", {files: ["poke.gif"]});
    }

    if (msg.content.startsWith(prefix + "hug")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`Mention someone to hug first.`")
            return
        }
        msg.channel.send("**" + member + "**" + " you have been hugged by " + "**" + msg.author.username + "**" + " <:Hype:484407265147879425> ", {files: ["hug.gif"]});
    }

    if (msg.content.startsWith(prefix + "slap")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`Mention someone to slap first.`")
            return
        }
        msg.channel.send("**" + member + "**" + " you have been slapped by " + "**" + msg.author.username + "**" + " <:monkaS:454638423094067201> ", {files: ["slap.gif"]});
    }

    if (msg.content.startsWith(prefix + "kiss")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`Mention someone to kiss first.`")
            return
        }
        msg.channel.send("**" + member + "**" + " you have been kissed by " + "**" + msg.author.username + "**" + " <a:HeartGirl:489819165738270738> ", {files: ["kiss.gif"]});
    }

    if (msg.content.startsWith(prefix + "tickle")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`Mention someone to tickle first.`")
            return
        }
        msg.channel.send("**" + member + "**" + " you have been tickled by " + "**" + msg.author.username + "**" + " <:Hype:484407265147879425> ", {files: ["tickle.gif"]});
    }

    if (msg.content.startsWith(prefix + "welcome")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`Mention someone to welcome first.`")
            return
        }
        if (member.user.bot == true) {return}
        msg.channel.send("**" + member + "**" + " welcome to the Clan! Have fun in here!" + "<:Hype:484407265147879425> ", {files: ["welcome.gif"]});
    }

    if (msg.content.startsWith(prefix + "head-pat")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`Mention someone to pat on the head first.`")
            return
        }
        msg.channel.send("**" + member + "**" + " you have been patted on the head by " + "**" + msg.author.username + "**" + " <:Hype:484407265147879425> ", {files: ["head-pat.gif"]});
    }

    if (msg.content.startsWith(prefix + "kick")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`I think you should tell me who I have to kick first. For real.`")
            return
        }
        if (member.user.bot == true) {return}
        if (msg.author.id == member.id) {return}
 
        if(!msg.member.hasPermission("KICK_MEMBERS")){
            msg.channel.send("`Hah! Gottem! You can't use this command if you don't have kick_members permission!` <:SwiftRage:489811535728738314> ");
        }
        // Kick
        member.kick().then((member) => {
            // Successmsg
            msg.channel.send( " <:ByeGuys:481941203156467722> " + "**" + member.displayName + "**" + " `has chosen to dig out artifacts alone. Hopefully he comes back.` <:Hype:484407265147879425> ");
        }).catch(() => {
            // Failmsg
            msg.channel.send("");
        });
    }

    if (msg.content.startsWith(prefix + "ban")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`I think you should tell me who I have to ban first. For real.`")
            return
        }
        if (member.user.bot == true) {return}
        if (msg.author.id == member.id) {return}
 
        if(!msg.member.hasPermission("BAN_MEMBERS")){
            msg.channel.send("`Hah! Gottem! You can't use this command if you don't have ban_members permission!` <:SwiftRage:489811535728738314> ");
        }
        
        // ban
        member.ban().then((member) => {
            // Successmsg
            msg.channel.send( " <:ByeGuys:481941203156467722> " + "**" + member.displayName + "**" + " `got kicked in the butt by The Gauntlet and now he's up and away!` <:WutFace:489810993673928711> ");
        }).catch(() => {
            // Failmsg
            msg.channel.send("");
        });
    }
   
    if (msg.content.startsWith(prefix + "warn")) {
        const member = msg.mentions.members.first();
        if(!member){
            msg.channel.send("`I think you should tell me who I have to warn first. For real.`")
            return
        }
        if (member.user.bot == true) {return}
        if (msg.author.id == member.id) {return}
 
        if(!msg.member.hasPermission("BAN_MEMBERS")){
            msg.channel.send("`Hah! Gottem! You can't use this command!` <:SwiftRage:489811535728738314> ");
        }   
       
        warns[member.user.id] = warns[member.user.id]+1 || 1;
        msg.channel.send(' `Wow, that was surprinsingly easy!` ' + "**" + member.displayName + "**" + ' `has been warned` ' + "**" + warns[member.user.id] +  "**" + ' `times. Keep an eye out on how many you can get.`');
    }
	
	if (msg.content.startsWith(prefix + "mute")) {
            const member = msg.mentions.members.first();
            if(!member){
                msg.channel.send("`I think you should tell me who I have to mute first. For real.`")
                return
            }
            if (member.user.bot == true) {return}
            if (msg.author.id == member.id) {return}
 
            if(!msg.member.hasPermission("MANAGE_MESSAGES")){
                 msg.channel.send("`Hah! Gottem! You can't use this command if you don't have manage_messages permission!` <:SwiftRage:489811535728738314> ");
            }   
		
		member.addRole(member.guild.roles.find(role => role.name === "Muted"));
		msg.channel.send("`What can I say,` " + "**" + member.displayName + "**" + " `in some cases it's better to play by the rules , in other cases it's not.`");
	}
	
		if (msg.content.startsWith(prefix + "unmute")) {
            const member = msg.mentions.members.first();
            if(!member){
                msg.channel.send("`I think you should tell me who I have to unmute first. For real.`")
                return
            }
            if (member.user.bot == true) {return}
            if (msg.author.id == member.id) {return}
 
            if(!msg.member.hasPermission("MANAGE_MESSAGES")){
                msg.channel.send("`Hah! Gottem! You can't use this command if you don't have manage_messages permission!` <:SwiftRage:489811535728738314> ");
            }   
			
		member.removeRole(member.guild.roles.find(role => role.name === "Muted"));
		msg.channel.send('`Oh God!` ' + "**" + member.displayName + "**" + " `isn't that right you wish not to go back in that spooky cave again?!` <:cmonBruh:602484003647389707> ");
    }

        if (msg.content.startsWith(prefix + "clear")) {
            async function clear() {

            if(!msg.member.hasPermission("MANAGE_MESSAGES")){
                msg.channel.send("`Hah! Gottem! You can't use this command if you don't have manage_messages permission!` <:SwiftRage:489811535728738314> ");
            }
        
            msg.delete();
            const fetched = await msg.channel.fetchMessages({limit: 5000});
            msg.channel.bulkDelete(fetched);
        }
        clear();
    }


	if (msg.content.startsWith(prefix + "iam lol")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "lol"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the LoL role and you can access #League-of-Legends in the fun side section.`');
    }
    
    
	if (msg.content.startsWith(prefix + "iam English")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "English"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the English role and you can access #english-only in the fun side section.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Spoilers")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Spoilers"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Spoilers role and you can access #Spoilers in the fun side section.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Art")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Art"));
        msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Art role and you can access Creative section.`');
    }
    
    if (msg.content.startsWith(prefix + "iam TFT")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "TFT"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the TFT role and you can access #teamfight-tactics in the fun side section.`');
    }
    
    if (msg.content.startsWith(prefix + "iam NSFW")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "NSFW"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the NSFW role and you can access #ezreal-playing-room in the fun side section.`');
    }

    if (msg.content.startsWith(prefix + "iam Unranked")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Unranked"));
		msg.channel.send("`Very Good,` " + "**" + member.displayName + "**" + " `you have the Unranked role, now everybody can see what division you're actually not. `");
    }
    
    if (msg.content.startsWith(prefix + "iam Iron")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Iron"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Iron role, now everyone can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Bronze")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Bronze"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Bronze role, now everyone can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Silver")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Silver"));
        msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Silver role, now everyone can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Gold")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Gold"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Gold role, now everyone can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Platinum")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Platinum"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Platinum role, now everyone can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Diamond")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Diamond"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Diamond role, now everyone can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Master")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Master"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Master role, now everyone can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Grandmaster")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Grandmaster"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Grandmaster role, now everyone can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iam Challenger")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Challenger"));
		msg.channel.send('`Very Good,` ' + "**" + member.displayName + "**" + ' `you have the Challenger role, now everyone can see what division you actually are.`');
    }

    if (msg.content.startsWith(prefix + "iam Fete")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "Fete"));
		msg.channel.send("`Oo` " + "**" + member.displayName + "**" + " ` you're a girl? Awesome! It's a shame you aren't Lux. I would've loved if you were Lux.`");
	}
    
    if (msg.content.startsWith(prefix + "iam No XP")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.addRole(member.guild.roles.find(role => role.name === "No XP"));
		msg.channel.send("`Got it` " + "**" + member.displayName + "**" + " `you like the color you currently have, isn't that right?`");
    }
    
    if (msg.content.startsWith(prefix + "iamn lol")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "lol"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your LoL role and you can no longer access the #League-of-Legends channel.`');
    }
    
    
	if (msg.content.startsWith(prefix + "iamn English")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "English"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your English role and you can no longer access the #english-only channel.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Spoilers")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Spoilers"));
        msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Spoilers role and you can no longer access the #Spoilers channel.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Art")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Art"));
        msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Art role and you can no longer access the Creative section.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn TFT")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "TFT"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your TFT Role and you can no longer access the #teamfight-tactics channel.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn NSFW")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "NSFW"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your NSFW Role and you can no longer access #ezreal-playing-room channel.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Unranked")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Unranked"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" +' `I removed your Unranked role, now nobody can see what division you are actually not.`');
    }
    

    if (msg.content.startsWith(prefix + "iamn Iron")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Iron"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Iron role , now nobody can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Bronze")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Bronze"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Bronze role , now nobody can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Silver")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Silver"));
        msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Silver role , now nobody can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Gold")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Gold"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Gold role , now nobody can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Platinum")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Platinum"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Platinum role , now nobody can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Diamond")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Dimaond"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Diamond role , now nobody can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Master")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Master"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Master role , now nobody can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Grandmaster")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Grandmaster"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Grandmaster role , now nobody can see what division you actually are.`');
    }
    
    if (msg.content.startsWith(prefix + "iamn Challenger")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Challenger"));
		msg.channel.send('`Perfect,` ' + "**" + member.displayName + "**" + ' `I removed your Challanger role , now nobody can see what division you actually are.`');
    }

    if (msg.content.startsWith(prefix + "iamn Fete")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "Fete"));
		msg.channel.send('`Oof` ' + "**" + member.displayName + "**" + ' `now nobody is going to know you are a girl. But I will!`');
	}
    
    if (msg.content.startsWith(prefix + "iamn No XP")) {

		
	    // Easy way to get member object though mentions.
        const member = msg.member
		
		member.removeRole(member.guild.roles.find(role => role.name === "No XP"));
		msg.channel.send('`Awesome,` ' + "**" + member.displayName + "**" + ' `you want to grow up in the hierarchy. Keep it up!`');
	}




    
    if (msg.content.indexOf( 'ezreal') > -1) {
        const emoji = msg.guild.emojis.find(emoji => emoji.name === 'Hype');
        msg.react(emoji);
    }

    if (msg.content.indexOf( 'costin') > -1) {
        const emoji = msg.guild.emojis.find(emoji => emoji.name === 'catLove');
        msg.react(emoji);
    }

    if (msg.content.indexOf( 'crazy') > -1) {
        const emoji = msg.guild.emojis.find(emoji => emoji.name === 'cmonTom');
        msg.react(emoji);
    }

    if (msg.content.indexOf( 'petryca') > -1) {
        const emoji = msg.guild.emojis.find(emoji => emoji.name === 'Baka');
        msg.react(emoji);
    }

    if (msg.content.indexOf( 'volvo') > -1) {
        const emoji = msg.guild.emojis.find(emoji => emoji.name === 'catoe');
        msg.react(emoji);
    }

    if (msg.content.indexOf( 'funydeny') > -1) {
        const emoji = msg.guild.emojis.find(emoji => emoji.name === 'WTF');
        msg.react(emoji);
    }

    if (msg.content.indexOf( 'riven') > -1) {
        const emoji = msg.guild.emojis.find(emoji => emoji.name === 'rivenComfy');
        msg.react(emoji);
    }

    if (msg.content.indexOf( 'kiki') > -1) {
        const emoji = msg.guild.emojis.find(emoji => emoji.name === 'kecyuBruh');
        msg.react(emoji);
    }

    if (msg.content.indexOf( 'vipera') > -1) {
        msg.react('🔪')
        .then(() => msg.react('🐍'))
        .catch(() => console.error('One of the emojis failed to react.'));
    }


    if (msg.channel.id === "474155839351947264") {
        if (msg.content.indexOf( 'propun') > -1)
		msg.react('✅')
			.then(() => msg.react('❎'))
        else if (msg.content.indexOf( 'sugerez') > -1) 
        msg.react('✅')
            .then(() => msg.react('❎'))
        else (msg.content.indexOf( 'Sugerez') > -1)
        msg.react('✅')
            .then(() => msg.react('❎'))
            .catch(() => console.error('One of the emojis failed to react.'));

    }
    
    if (msg.channel.id === "474155839351947264") {
        if (msg.content.indexOf( 'Propun') > -1)
        msg.react('✅')
            .then(() => msg.react('❎'))
            .catch(() => console.error('One of the emojis failed to react.'));
    }
});

 
client.on("guildMemberAdd", member => {
    member.send({files: ["welcome.png"]})
    member.guild.channels.get('506520643001647124').send("Welcome " + "**" + member.displayName + "**" + " to Clanul Lulunaticilor de alaturi! <:Hype:484407265147879425> ", {files: ["welcome-guild.png"]}); 
});

client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "New members/LVL 0"));
});

client.on('guildMemberRemove',(member) => {
    member.guild.channels.get('506520643001647124').send("**" + member.displayName + "**" + " has just left server.. Bye Bye. <:Cry:481937614988115981> ");
});

client.login(config.token)