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

export { randomize }