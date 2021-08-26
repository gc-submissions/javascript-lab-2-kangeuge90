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
                logDeath(player1, player2);
                break;
            }
        }
    }
}


// ○ Within the fight function, write a while loop that loops while true
// ■ Declare and initialize a variable named attacker equal to the
// chooseOption function with player1 and player2 as arguments.
// ■ If attacker is equal to player1.
//      ●Set player2Health equal to the result of attackPlayer with
//      player2Health as its argument.
//      ●Calls the logHealth function with player2 and player2Health
//      as its arguments.
//      ● If the result of isDead with player2Health as an argument is
//      true:
//          ○ Call the logDeath function with player1 and player2 as
//          arguments.
//          ○ Break
// ■ Has an else statement that:
//      ● Sets player1Health equal to the attackPlayer function with
//      player1Health as its argument.
//      ● Call the logHealth function with player1 and player1Health as
//      its arguments.
//      ● If the result of isDead with player1Health as an argument is
//      true:
//          ○ Call the logDeath function with player2 and player1 as
//          arguments.
//          ○ Break
// ● Lastly, call the fight function with the required four parameters. You pick the names
// and starting health. For example: player1: “Mitch”, player2: “Adam”, player1Health: 100,
// player2Health: 100.

fight('Adam', 'Brent', 100, 100);