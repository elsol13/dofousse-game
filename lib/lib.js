
const monsterNames = ['Tofu', 'Bouftou', 'Kanigrou', 'Blop Royal', 'Prespic', 'Piou', 'Chafer']
const namesPlayer = []

/**
 * 
 * @param {Integer} max // Function to return a random number between 0 and max
 */
function randomNumber(max) { 
    let number = Math.floor(Math.random() * max);  
    return number;
}


export {
    monsterNames,
    namesPlayer,
    randomNumber
}