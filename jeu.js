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
 * 
 * @param {Integer} max // Function to return a random number between 0 and max
 */
function randomNumber(max) { 
    let number = Math.floor(Math.random() * max);  
    return number;
}

/**
 * Array to randomize monster name
 */
monsterNames = ['Tofu', 'Bouftou', 'Kanigrou', 'Blop Royal', 'Prespic', 'Piou', 'Chafer']
/**
 * Constructor for the class Monster
 */
class Monster {
    constructor() {
        this._name = monsterNames[randomNumber(monsterNames.length)];
        this._experience = randomNumber(51); // de 0 à 50
        this._attack = randomNumber(this._experience+1);
        this._defense = randomNumber(this._experience+1);
        this._gold = randomNumber(51);
    }
}

/**
 * Constructor for the class Seller
 */
class Seller {
    constructor() {
        this._experience = randomNumber(51); // de 0 à 50
        this._weapon = randomNumber(5);
    }
}
//#endregion

//#region Generating Player 
class Player {
    constructor(name) {
        this._name = name;
        this._pv = 10;
        this._experience = 0;
        this._attack = 1;
        this._defense = 1;
        this._weaponEquipped = true;
        this._weapons = []; //How to indicate an already existing weapon here?
        this._gold = 20; 
    }
    getName() {
        return this._name;
    }
    getPv() {
        return this._pv;
    }
    getExp() {
        return this._pv;
    }
    getAtt() {
        return this._attack;
    }
    getDef() {
        return this._defense;
    }
    getWeaponEquipped() {
        return this._weaponEquipped;
    }
    getWeapons() {
        return this._weapons;
    }
    getGold() {
        return this._weapons;
    }
}

function makePlayer() {
    let playerNam = document.getElementById('playerName');
    let Player1 = new Player(playerNam);
    console.log(Player1);
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
meetMonster();
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