import {randomNumber} from '../lib/lib.js'

/**
 * @class
 * @classdesc 
 * @author
 */
class Seller {
    constructor() {
        this._experience = randomNumber(51); // de 0 à 50
        this._weapon = randomNumber(5);
    }
}

export default Seller