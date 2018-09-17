const Discord = require("discord.js");
	const low = require("lowdb");
	const FileSync = require("lowdb/adapters/FileSync")
	const shopadapter = new FileSync(`shop.json`);
	const shopdb = low(shopadapter);
	const adapter = new FileSync("datatbase.json")
	const db = low(adapter)
	db.defaults({ histoires: [], xp: [], inventory: []}).write()
	var bot = new Discord.Client();
	var prefix = ("/");
	var randnum = 0
	var storynumber = db.get("histoires").map("story_value").value();
	var a = ("Administrer")
	var f = ("Fortnite")

	bot.on("ready", () => {
		bot.user.setPresence({ game: { name: a}})
		console.log("Robot Prêt!");
	});
	bot.login("NDM4MDExMDQ2NzE2ODk5MzM4.DcZ1iQ.QBT-XcO83_gqdSn6LcIKAmP01qY");
