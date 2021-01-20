import Player from './class/player.js'
import Monster from './class/monstre.js'
import Seller from './class/seller.js'


//#region Showing & hiding HTML divs on index.html
/**
 * Show only the intro div on start
 */
function getStarted() {
    document.getElementById("debut1").style.display="block";
}
window.onload = getStarted;

/**
 * Reset all the elements in the page
 */
function resetElement() {
    document.getElementById("debut1").style.display="none";
    document.getElementById("debut1-1").style.display="none";
    document.getElementById("debut1-2").style.display="none";
    document.getElementById("debut1-3").style.display="none";
    document.getElementById("debut2").style.display="none";
    document.getElementById("debut2-1").style.display="none";
    document.getElementById("debut2-2").style.display="none";
    document.getElementById("monsterTurn").style.display="none";
    document.getElementById("sellerTurn").style.display="none";
    document.getElementById("equip").style.display="none";

    const buttonToDebut11 = document.getElementById('toDebut11')
    buttonToDebut11.addEventListener('click', function () {

        const player = makePlayer(namePlayer);


        const pv = document.getElementById('showPV').value
        pv.innerHTML = player.getPv()







        return toDiv('debut1-1')
    })

}

/**
 * The page we want to move
 * @param {String} divToChange - the id of the page we want to move 
 */
function toDiv(divToChange) {
    console.log(divToChange);
    resetElement();
    const getId = document.getElementById(divToChange);
    if (getId) getId.style.display="block";
    else console.log("[toDiv] An error has occurred when changing page", divToChange);
}

resetElement();
//#endregion

//#region Constructors for classes Monster, Seller and Player


/**
 * Array to randomize monster name
 */



//#endregion

//#region Generating Player 


function makePlayer(namePlayer) {
    let playerName = document.getElementById('playerName');
    let player1 = new Player(player);
    console.log("Player 1", player1);
    return player1
}

//#endregion

//#region Generating random turns (Monsters and Sellers)

function meetSeller() {
    console.log('A seller will promptly be generated.');
    let seller = new Seller();
    toDiv('sellerTurn');
}

function meetMonster() {
    console.log('A monster will promptly be generated.');
    let monster = new Monster();
    console.log(`New monster ${monster._name} has a ${monster._experience} experience, ${monster._attack} attack, ${monster._defense} defense and ${monster._gold} gold.`); 
    toDiv('monsterTurn');
}
//meetMonster()
/**
 * Function to randomize the next turn
 */
function randomize() { 
    console.log('Randomizing your next turn!');
    let number = Math.floor(Math.random()*10);
    if (number <= 4) {
        meetSeller();
    } else {
        meetMonster();
    }
}
//#endregion