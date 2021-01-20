//#region IMPORTS
import Player from './class/player.js'
import Monster from './class/monstre.js'
import Seller from './class/seller.js'
//#endregion

/**
 *  @description Show only the intro div on start
 */
function getStarted() {
    document.getElementById("1a").style.display="block";
}
window.onload = getStarted; // Make it so that the starting div '1a' always gets displayed

/**
 * @description Hide all the elements in the page
 */
function hideElement() {
    document.getElementById("1a").style.display="none";
    document.getElementById("1b").style.display="none";
    document.getElementById("1c").style.display="none";
    document.getElementById("2").style.display="none";
    document.getElementById("3").style.display="none";
    document.getElementById("4").style.display="none";
    document.getElementById("5").style.display="none";
    document.getElementById("monster").style.display="none";
    document.getElementById("seller").style.display="none";
    document.getElementById("equip").style.display="none";
}

//#region NAVIGATION FROM ONE DIV TO ANOTHER
/**
 * The page we want to move
 * @param {String} divToChange - the id of the page we want to move 
 */
function toDiv(divToChange) {
    console.log(divToChange);
    hideElement();
    const getId = document.getElementById(divToChange);
    if (getId) getId.style.display="block";
    else console.log("[toDiv] An error has occurred when changing page", divToChange);
}
hideElement();

const buttonTo1b = document.getElementById('to1b')
buttonTo1b.addEventListener('click', () => toDiv('1b'));

const buttonto1bfrom1c = document.getElementById('to1bfrom1c')
buttonto1bfrom1c.addEventListener('click', () => toDiv('1b'));

const buttonTo1c = document.getElementById('to1c')
buttonTo1c.addEventListener('click', () => toDiv('1c'));

const buttonTo2 = document.getElementById('to2')
buttonTo2.addEventListener('click', () => toDiv('2'));

const buttonTo2from1b = document.getElementById('to2from1b')
buttonTo2from1b.addEventListener('click', () => toDiv('2'));

const buttonTo2from1c = document.getElementById('to2from1c')
buttonTo2from1c.addEventListener('click', () => toDiv('2'));

const buttonTo3 = document.getElementById('to3')
buttonTo3.addEventListener('click', () => toDiv('3'));

const buttonTo4 = document.getElementById('to4')
buttonTo4.addEventListener('click', function() {
    const playerName = document.getElementById("playerName".value);
    const hero = makePlayer(playerName);
    toDiv('4');
    //#region Show player's properties
    const pv = document.getElementById('showPv').value
    pv.innerHTML = hero.getPv()

    const exp = document.getElementById('showExp').value
    exp.innerHTML = hero.getExp()

    const att = document.getElementById('showAtt').value
    att.innerHTML = hero.getAtt()

    const def = document.getElementById('showDef').value
    def.innerHTML = hero.getDef()

    const gold = document.getElementById('showGold').value
    gold.innerHTML = hero.getGold()
});
//#endregion

const buttonTo5 = document.getElementById('to5')
buttonTo5.addEventListener('click', () => toDiv('5'));

const buttonToRandomFrom5 = document.getElementById('toRandomFrom5')
buttonToRandomFrom5.addEventListener('click', () => randomize());

const buttonToRandomFromEquip = document.getElementById('toRandomFromEquip')
buttonToRandomFromEquip.addEventListener('click', () => randomize());

const buttonToEquipFromSeller = document.getElementById('toEquipFromSeller')
buttonToEquipFromSeller.addEventListener('click', () => toDiv('equip'));

const buttonToEquipFromMonster = document.getElementById('toEquipFromMonster')
buttonToEquipFromMonster.addEventListener('click', () => toDiv('equip'));

//#endregion

function makePlayer(namePlayer) {
    let playerName = document.getElementById('playerName');
    let hero = new Player(playerName);
    console.log("Player", hero);
}

function meetSeller() {
    console.log('A seller will promptly be generated.');
    let seller = new Seller();
    toDiv('seller');
}

function meetMonster() {
    console.log('A monster will promptly be generated.');
    let monster = new Monster();
    console.log(`New monster ${monster._name} has a ${monster._experience} experience, ${monster._attack} attack, ${monster._defense} defense and ${monster._gold} gold.`); 
    toDiv('monster');
}
/**
 * @description To randomize the following turn (monster||seller)
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

