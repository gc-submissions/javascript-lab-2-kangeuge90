"use strict";

function getRandomNumberBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomDamage = () => {
    // return Math.floor(Math.random() * 10) + 1;
    const randomDamage = getRandomNumberBetween(1, 10);
    return randomDamage;
}

// ALTERNATIVE: const randomDamage = _ => getRandomNumberBetween(1,10);

const chooseOption = (opt1, opt2) => {
    const randNum = getRandomNumberBetween(0, 1);
    const optionOutcome = (randNum === 0) ? opt1 : opt2;
    return optionOutcome
}

// Option 2 :
// const chooseOption = (opt1, opt2) => {
// const randNum = getRandomNumberBetween(0,1);
// return randNum === 0 ? opt1 : opt2;
// }

function attackPlayer(health) {
    return health -= randomDamage();
}

const logHealth = (player, health) => { console.log(`${player} health: ${health}`) }

const logDeath = (winner, loser) => { console.log(`${winner} defeated ${loser}!  `) }

const isDead = (health) => {
    if (health <= 0) {
        return true
    } else {
        return false
    }
}



function fight(player1, player2, player1Health, player2Health) {
    while (player1Health > 0 && player2Health > 0) {
        const attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health) === true) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health) === true) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

// ○ Within the fight function, write a while loop that loops while true

// Alternatively, while loops can be used to create run limits by utilizing i=0, i++ and 
// i<1000

fight('Adam', 'Brent', 106, 120);