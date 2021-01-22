import {monsterNames, randomNumber} from '../lib/lib.js'

/**
 * @class
 * @classdesc 
 * @author
 */
class Monster {
    constructor() {
        this._name = monsterNames[randomNumber(monsterNames.length)];
        this._experience = randomNumber(51); // de 0 à 50
        this._attack = randomNumber(this._experience+1);
        this._defense = randomNumber(this._experience+1);
        this._weapons = [];
        this._gold = randomNumber(51);
    }
    getName() {
        return this._name;
    }
    getExp() {
        return this._experience;
    }
    getAtt() {
        return this._attack;
    }
    getDef() {
        return this._defense;
    }
    getWeapons() {
        return this._weapons;
    }
    getGold() {
        return this._gold;
    }
}

export default Monster