const myFighter1 = new Fighter({name: 'Maximus',damage: 25, strength: 30, agility: 25, health: 100});
const myFighter2 = new Fighter({name: 'Commodus',damage: 25, strength: 25, agility: 20, health: 90});

function Fighter(obj) {
    let {name, damage, strength, agility, health} = obj;
    let win = 0;
    let loss = 0;

    this.getName = () => {
        console.log(name);
    };

    this.getDamage = () => {
        console.log(damage);
    };

    this.getStrength = () => {
        console.log(strength);
    };
    
    this.getAgility = () => {
        console.log(agility);
    };

    this.getHealth = () => {
        console.log(health);
    };
    
    function attack(player) {
        let chance = player.getAgility() + player.getStrength;
        let potential = 100;

        if (chance >= potential) {
            chance = potential;
        } else {
            chance = player.getAgility() + player.getStrength;
        }

        if (Math.random() * potential >= chance) {
            let value = this.getDamage();
            () => {
                if (health - value < 0) {
                    health = 0;
                } else {
                    health -= value;
                }
            }   
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${player.getName()}`); 
        } else {
            console.log(`${player.getName()} attack missed`);
        }
    }

    function logCombatHistory() {
        console.log(`Name: ${name}, Wins: ${win}, Losses: ${loss}`);
    }

    function addWin() {
        win++;
    }

    function addLoss() {
        loss++;
    }

    attack();
    logCombatHistory();
    addWin();
    addLoss();
}

function battle(myFighter1, myFighter2) {
    let halflife = 0.5;

    if (myFighter1.getHealth() > 0 && myFighter2.getHealth() > 0) {

        while(myFighter1.getHealth() > 0 && myFighter2.getHealth() > 0) {
            Math.random() < halflife ? myFighter1.attack(myFighter2) : myFighter2.attack(myFighter1);
                }
                if(myFighter1.getHealth()) {
                    myFighter1.addWin();
                    myFighter2.addLoss();
                    console.log(`${myFighter1.getName()} has won!`);
                } else if(myFighter2.getHealth()) {
                    myFighter2.addWin();
                    myFighter1.addLoss();
                    console.log(`${myFighter2.getName()} has won!`);
                } else {
                    console.log('Something went wrong');
                }
                myFighter1.logCombatHistory();
                myFighter2.logCombatHistory();
    } else {
            if (myFighter1.getHealth()) {
                console.log(`${myFighter2.getName()} is dead and can't fight`); 
            } else {
                console.log(`${myFighter1.getName()} is dead and can't fight`)
            }
    }
}