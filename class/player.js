
/**
 * @class
 * @classdesc 
 * @author
 */
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
        return this._gold;
    }
}

export default Player