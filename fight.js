regPlayerAttack = function () {
    //random boolean to determine if its going to be 10% dmg of positive or 
negative
    randomDmgFlag = Math.round(Math.random());
    //the 10% will be added on
    if (randomDmgFlag === 1) {
        rawDmg = Math.round((player.level * 3 + player.strength * 8) - 
(chosenEnemy.stamina * 2));
        randomDmgRange = (15.0 / 100) * rawDmg;
        randomDmg = Math.floor(Math.random() * (randomDmgRange - 0) + 0);
        totalDmg = rawDmg + randomDmg;
        chosenEnemy.health -= totalDmg;
        $("#textbox-text").prepend("You attacked the " + chosenEnemy.name + 
" for " + totalDmg + " damage." + "<br>");
    }
    //the 10% will be subtracted
    else {
        rawDmg = Math.round((player.level * 3 + player.strength * 8) - 
(chosenEnemy.stamina * 2));
        randomDmgRange = (15.0 / 100) * rawDmg;
        randomDmg = Math.floor(Math.random() * (randomDmgRange - 0) + 0);
        totalDmg = rawDmg - randomDmg;
        chosenEnemy.health -= totalDmg;
        $("#textbox-text").prepend("You attacked the " + chosenEnemy.name + 
" for " + totalDmg + " damage." + "<br>");
    }
}