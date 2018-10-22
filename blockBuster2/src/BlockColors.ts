class BlockColors {
    possibleColors: string[] = ['#f00', '#00f', '#0f0', '#f0f', '#ff0', '#0ff'];

    constructor() {
    }

    getRandomColor(): string {
        return this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)];
    }
}

export default new BlockColors();