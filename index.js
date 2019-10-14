const bowlingCalculator = (input) => {
    return input.reduce((total, currentFrame, index)=> {
        const [firstRoll, secondRoll, thirdRoll] = currentFrame;
        const isStrike = firstRoll === 10;
        const isSpare = firstRoll + secondRoll === 10;
    
        if(thirdRoll) {            
            if(isStrike || isSpare) {
                return total + firstRoll + secondRoll + (thirdRoll * 2);
            }

            return total;
        }
        
        if(isStrike) {
            const [firstRollFromBonus, secondRollFromBonus] = input[index + 1];
            return total + firstRoll + firstRollFromBonus + secondRollFromBonus;
        }

        if(isSpare){
            const [firstRollFromBonus] = input[index + 1];
            return total + firstRoll + secondRoll + firstRollFromBonus;
        }

        return total + firstRoll + secondRoll;
    }, 0)
}

module.exports = bowlingCalculator;