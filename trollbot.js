// https://github.com/Wingman4l7/trollbot

// Get the required module
var irc = require('irc'); // npm install irc : https://github.com/martynsmith/node-irc
  
var config = {
		channel : ['#infested_channel'],
		server  : 'chat.freenode.net',
		name    : 'trollbot',
		owner   : 'your_user_name',
		killcmd : 'secret_phrase',
		trolls  : ['this_user_is_a_troll', 'so_is_this_user'],
		phrases : ['HERP DERP', 'O RLY', 'NO U', 'Y U NO', 'u mad bro']
};

// connect to the IRC channel
try {
	var bot = new irc.Client(config.server, config.name, {channels: config.channel});
	console.log('joined %s', config.channel);
}
catch (err) {
	console.log('error: %s, tried to create %s', err.code, err.path); 
	process.exit(); 
}
	
// this listener will prevent IRC network errors from crashing the bot
bot.addListener('error', function(message) {
    console.log('IRC network error: ', message);
});

// listen for chat messages
bot.addListener('message', function(nick, to, text, message) {
	// is troll on list?
	if (config.trolls.indexOf(nick) > -1) {
		// randomly pick phrase to say to troll
		var pick = config.phrases[Math.floor(Math.random() * config.phrases.length)];
		bot.say(config.channel[0], pick);
	}
	
	// allows bot owner to issue a remote kill command
	if (nick == config.owner && text == config.killcmd) {
		exitIRC(); 
	}
});

// executes these actions after receiving a successful kill command
function exitIRC() {
	bot.part(config.channel);
	console.log("left channel %s", config.channel);
	process.exit();  // remove this if you want to add code to revive the bot remotely
}