
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
        return this._weapons;
    }

    fight (monster) {
//calculate player's score
        let resultPlayer = this._pv + this._attack + this._defense
//calculate monster's score
        let resultMonster = monster.getAtt() + monster.getDef() + monster.getExp()
//compare player's score and monster's score to determinate who wins
        if (resultPlayer > resultMonster) {
            //destroy monster
        }
        else{ 
            if (this._pv === 0){
                alert("You have lost. Better luck next time")
                return false
            }else{
                this._pv--;
                return true
            }
        }
//if player win, monster is deleted

//if mo;ter win, and player have 0 HP, then go back to first page

// if monster win and player still have HP, then continue to next round (monster or seller)



    }
}

export default Player