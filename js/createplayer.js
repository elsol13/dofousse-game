import { buttonTo4 } from './nav.js'

function makePlayer(namePlayer) {
    //let playerName = document.getElementById('playerName');
    let hero = new Player(namePlayer);
    console.log("Player", hero);
    return hero
}

export { makePlayer }