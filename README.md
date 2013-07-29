trollbot
========

### About ###
This is a simple IRC bot implemented in Node.js.  It demonstrates: 

  - connecting / disconnecting to IRC server(s)
  - listening for & automatically replying to chat messages
  - discerning between private / public messages and users
  - remote command acceptance from a whitelisted user

### How to Install ###
This requires [Node.js] and the [node-irc] library.
The former will have to be downloaded and installed.
Once that is done, the latter can be installed via this command:
    
	npm install irc 

[Node.js]: http://nodejs.org/
[node-irc]: https://github.com/martynsmith/node-irc

### How to Run ###
All the parameters *(server, channel(s), bot name, troll list, phrase list, your username, kill command)* are set in a config declared within the code.

To use, navigate to the installed directory and run this command:

	node trollbot.js
	
### License ###
While obviously open-source, I haven't bothered to decide which license this should be under.  If I ever do it will probably end up being under the [GPL] or some flavor of [Creative Commons].

[GPL]: http://www.gnu.org/licenses/licenses.html
[Creative Commons]: http://creativecommons.org/licenses/


### Donations ###
Like this script?  You can send Bitcoin donations to: `1F7kfMNUNQy8e52RHnQAWYXeaYfzFqHJAZ`

*Quick reference:* $1 USD is currently: <img src="http://btcticker.appspot.com/mtgox/1.00usd.png">

Alternatively, you can use [Gittip](https://www.gittip.com/Wingman4l7/).