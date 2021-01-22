import Monster from '../class/monstre.js'
import Seller from '../class/seller.js'

function meetSeller() {
    console.log('A seller will promptly be generated.');
    let seller = new Seller();
    toDiv('seller');
}

function meetMonster() {
    console.log('A monster will promptly be generated.');
    let monster = new Monster();
    console.log(`New monster ${monster._name} has a ${monster._experience} experience, ${monster._attack} attack, ${monster._defense} defense and ${monster._gold} gold.`); 

    // Show monster's properties during monster turn

    const monsterName = document.getElementById('showMonsterName');
    monsterName.innerHTML = monster.getName();
    
    const monsterExp = document.getElementById('showMonsterExp');
    monsterExp.innerHTML = monster.getExp();

    const monsterAtt = document.getElementById('showMonsterAtt');
    monsterAtt.innerHTML = monster.getAtt();

    toDiv('monster');
}

export { meetMonster, meetSeller }