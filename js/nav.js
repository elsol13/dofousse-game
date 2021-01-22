import Player from '../class/player.js'
import Monster from '../class/monstre.js'
import Seller from '../class/seller.js'

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
    const pname = document.getElementById("playerName").value;
    const hero = makePlayer(pname);
    toDiv('4');
    
    //#region Show player's properties
    const name = document.getElementById('showPlayer')
    if (!name) console.error("Name not found")
    name.innerHTML = hero.getName()
    const name2 = document.getElementById('showName')
    if (!name2) console.error("Name not found")
    name2.innerHTML = hero.getName()
    const pv = document.getElementById('showPv')
    if (!pv) console.error("PV not found")
    pv.innerHTML = hero.getPv()
    const exp = document.getElementById('showExp')
    exp.innerHTML = hero.getExp()
    const att = document.getElementById('showAtt')
    att.innerHTML = hero.getAtt()
    const def = document.getElementById('showDef')
    def.innerHTML = hero.getDef()
    const gold = document.getElementById('showGold')
    gold.innerHTML = hero.getGold()
});
//#endregion

const buttonTo5 = document.getElementById('to5')
buttonTo5.addEventListener('click', () => toDiv('5'));

const buttonToRandomFrom5 = document.getElementById('toRandomFrom5')
buttonToRandomFrom5.addEventListener('click', () => randomize());

const buttonToRandomFromEquip = document.getElementById('toRandomFromEquip')
buttonToRandomFromEquip.addEventListener('click', () => randomize());

// To flee from the monster
const buttonToEquipFromSeller = document.getElementById('toEquipFromSeller')
buttonToEquipFromSeller.addEventListener('click', () => toDiv('equip'));

const buttonToEquipFromMonster = document.getElementById('toEquipFromMonster')
buttonToEquipFromMonster.addEventListener('click', () => toDiv('equip'));

export {
    getStarted,
    hideElement,
    toDiv,
    buttonTo1b,
    buttonto1bfrom1c,
    buttonTo1c,
    buttonTo2,
    buttonTo2from1b,
    buttonTo2from1c,
    buttonTo3,
    buttonTo4,
    buttonTo5,
    buttonToRandomFrom5,
    buttonToRandomFromEquip,
    buttonToEquipFromSeller,
    buttonToEquipFromMonster
}
