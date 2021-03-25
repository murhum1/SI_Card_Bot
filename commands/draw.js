// can be used as template
//save as command as commandName.js
const cards = require ("./ImageNames.js");
const card = require ("./card.js");


module.exports = {
	name: 'draw',
	description: 'draw 4 random cards',
	public: true, //has to be true to show as a command
	async execute(msg, args) {

        let list = [];
        length =  0;
        console.log(args);
        if (args.length == 2){
            if (args[1] > 10){
                return msg.channel.send("Can not draw more than 10 cards");
            }
        }


        switch(args[0]){
            case 'minor':
                console.log('cards.minor');

                //var num = (args.length == 1) ? args[1] : 4;
                 console.log(num);
                 list = getRandom(cards.minor, num = 4 );
                 //list = capitalizeTheFirstLetterOfEachWord(list);
                 break;
            case 'major':
                console.log('cards.major');
               // var num = (args.length == 1) ? args[1] : 4;
                list = getRandom(cards.major, num = 4 );
                //list = capitalizeTheFirstLetterOfEachWord(list);
                break;
            case 'fear':
                console.log('cards.fear');
                //var num = (args.length == 1) ? args[1] : 1;
                list = getRandom(cards.fear, num =1 );
                //list = capitalizeTheFirstLetterOfEachWord(list);
                break;
            case 'event':
                console.log('cards.event');
                //var num = (args.length == 1) ? args[1] : 1;
                list = getRandom(cards.event, num = 1);
                //list = capitalizeTheFirstLetterOfEachWord(list);
                break;
            default:
                var message = "Draw a Minor, Major, Fear or Event card.";
                list[0] = message;

        }

        console.log(list);
		await msg.channel.send(list);
	},
};


function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x] ;
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function capitalizeTheFirstLetterOfEachWord(list) {

    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
        separateWord.join(' ');
     }
