let playGame = confirm('Do you want to play a game?');
let continueGame;
let min = 0;
let max = 8;
let max2 = 12;
let randomNumber;
let userNumber;
let attempts = 3;
let totalPrize = 0;
let possiblePrize = '';
let prizeMax = 100;
let prizeMiddle = 50;
let prizeMin = 25;
let iter1 = 3;
let iter2 = 2;

if (!playGame) {
    alert('You did not become a billionaire, but can.');
} else {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);

    for (let i = attempts; i > 0; i--) {
        
        if (i === iter1) {
            totalPrize += prizeMax;
            possiblePrize = prizeMax;
        } else if (i === iter2) {
            totalPrize += prizeMiddle;
            possiblePrize = prizeMiddle;
        } else if (i === 1) {
            totalPrize += prizeMin;
            possiblePrize = prizeMin;
        }
        userNumber = +prompt('Please, enter a number from 0 to 8 \r\n Attempts left:' + [i] + 
        '\r\n Total prize:' + totalPrize +
        '\r\n Possible rize on current attempts:' + possiblePrize);

        
        if (!userNumber) {
            break;
        } else if (userNumber === randomNumber) {
            continueGame = confirm('Congratulation, you won! Your prize is:' + totalPrize + 
                                    '$. Do you want to continue?');
            if (!continueGame) {
                alert('Thank you for your participation. Your prize is:'+ totalPrize + '$');
                break;
            } else {

                randomNumber = Math.floor(Math.random() * (max2 - min + 1)) + min;
                console.log(randomNumber);
                for (let i = attempts; i > 0; i--) {
                    if (i === iter1) {
                        totalPrize += prizeMax;
                        possiblePrize = prizeMax;
                    } else if (i === iter2) {
                        totalPrize += prizeMiddle;
                        possiblePrize = prizeMiddle;
                    } else if (i === 1) {
                        totalPrize += prizeMin;
                        possiblePrize = prizeMin;
                    }
                    userNumber = +prompt('Please, enter a number from 0 to 8 \r\n Attempts left:' + [i] + 
                                    '\r\n Total prize:' + totalPrize +
                                    '\r\n Possible rize on current attempts:' + possiblePrize);
                   
                    if (!userNumber) {
                        break;
                    } else if (userNumber === randomNumber) {
                        continueGame = confirm('Congratulation, you won! Your prize is:' + totalPrize + 
                                    '$. Do you want to continue?');
                        if (!continueGame) {
                            alert('Thank you for your participation. Your prize is:'+ totalPrize + '$');
                            break;
                        }
                    }
                }
            } 
        }
    }

    if (userNumber !== randomNumber) {
        alert('Thank you for your participation. Your prize is:' + totalPrize + '$');
    }
}