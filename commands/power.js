const s = require("./sendCardLink");
const ImageNames = require ('./ImageNames.js');


module.exports = {
	name: 'power',
	description: 'Power Search',
    public: true,

	execute(msg, args) {
		msg.channel.send(s.sendCardLink(msg, args, ImageNames.power, "https://sick.oberien.de/imgs/powers/"));
	},
};