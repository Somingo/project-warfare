export default class Score {
    scoreBase = 10;
    scoreMultiplier = 1;
    scoreLevelMultiplier = 1;
    score = 0;

    earnScore(): number {
        let scoreEarned = this.scoreBase * this.scoreMultiplier * this.scoreLevelMultiplier;
        this.score += scoreEarned;
        this.scoreMultiplier++;
        return scoreEarned;
    }

    levelUp(lvl: number) {
        this.scoreLevelMultiplier = 1 + (lvl - 1) / 5;
        this.clearComboMultiplier();
    }

    clearComboMultiplier() {
        this.scoreMultiplier = 1;

    }
}