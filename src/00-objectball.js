function gameObject (){
    const teamsInfo = {
        home:{
            teamName:"Brooklyn Nets",
            teamColors:['Black', 'White'],
            players: {
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                }
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            teamColors:['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                }
            }
        }
    };
    return teamsInfo;
}

/*
console.log (gameObject());
{
  home: {
    teamName: 'Brooklyn Nets',
    teamColors: [ 'Black', 'White' ],
    players: {
      'Alan Anderson': [Object],
      'Reggie Evans': [Object],
      'Brook Lopez': [Object],
      'Mason Plumlee': [Object],
      'Jason Terry': [Object]
    }
  },
  away: {
    teamName: 'Charlotte Hornets',
    teamColors: [ 'Turquoise', 'Purple' ],
    players: {
      'Jeff Adrien': [Object],
      'Bismak Biyombo': [Object],
      'DeSagna Diop': [Object],
      'Ben Gordon': [Object],
      'Brendan Haywood': [Object]
    }
  }
}
*/

const game = gameObject();
const home = game.home;
const away = game.away;
const homePlayers = home.players;
const awayPlayers = away.players;
const gameInfo = gameArray();
const allPlayers = playersObject();
function gameArray(){
    let info = Object.entries(game).flat();
    return info;
}
function playersObject(){
   return {...homePlayers,...awayPlayers};
}


function numPointsScored(name){
    return allPlayers[name].points;
}
/*console.log (numPointsScored('Jeff Adrien'));
LOG:10*/


function shoeSize(name){
    return allPlayers[name].shoe;
}
/*console.log (shoeSize('Jason Terry'));
LOG:15*/


function teamColors(name){
    return gameInfo.find(team => team.teamName == name).teamColors;
}
/*console.log (teamColors('Charlotte Hornets'));
LOG: [ 'Turquoise', 'Purple' ]*/


function teamNames(){
    const info = Object.values(game);
    return info.map(team => team.teamName);
}
/*console.log (teamNames());
LOG:[ 'Brooklyn Nets', 'Charlotte Hornets' ]*/


function playerNumbers(name){
    const info = Object.values(game).flat();
    const team = info.find(team => team.teamName == name).players;
    return Object.values(team).map(player => player.number);
}
/*console.log (playerNumbers ('Brooklyn Nets'));
LOG:[ 0, 30, 11, 1, 31 ]*/


function playerStats(name){
  return allPlayers[name];
}
/*console.log (playerStats('DeSagna Diop'));
LOG:{
  number: 2,
  shoe: 14,
  points: 24,
  rebounds: 12,
  assists: 12,
  steals: 4,
  blocks: 5,
  slamDunks: 5
}*/


function bigShoeRebounds (){
    const shoes = Object.values(allPlayers).map(stat => stat.shoe);
    const maxShoe = Math.max(...shoes);
    const player = Object.values(allPlayers).filter(stat => stat.shoe === maxShoe);
    console.log (player[0]["rebounds"]);
}
/*console.log (bigShoeRebounds());
LOG:12*/
