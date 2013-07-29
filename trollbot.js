// https://github.com/Wingman4l7/trollbot

// Get the required module
var irc = require('irc'); // npm install irc : https://github.com/martynsmith/node-irc
  
var config = {
		channels : ['#trolls', '#more_trolls'],
		server  : 'chat.freenode.net',
		name    : 'trollbot',
		owner   : 'your_user_name',
		killcmd : 'secret_phrase',
		trolls  : ['troll_user', 'another_troll'],
		phrases : ['HERP DERP', 'O RLY', 'NO U', 'Y U NO', 'u mad bro']
};

// connect to the IRC channel(s)
try {
	var bot = new irc.Client(config.server, config.name, 
								{channels: config.channels, 
								autoConnect: false}
							);
	bot.connect(function() {
		console.log('joined %s', config.channel);
	});
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
	// is troll in list?
	if (config.trolls.indexOf(nick) > -1) {
		// randomly pick phrase to say to troll
		var pick = config.phrases[Math.floor(Math.random() * config.phrases.length)];
		if (to == config.name) {  // private message
			bot.say(nick, pick); //  respond in kind
		}
		else {
			bot.say(to, pick); // respond publicly in channel
		}
	}
	// allows bot owner to issue a remote kill command
	if (nick == config.owner && text == config.killcmd) {
		bot.disconnect( function() {
			console.log('left %s', config.channels);
		}); 
	}
});