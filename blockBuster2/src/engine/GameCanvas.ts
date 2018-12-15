export class GameCanvas {

    static GAME_WIDTH = 800;
    static GAME_HEIGHT = 600;

    static getCanvas(width = GameCanvas.GAME_WIDTH, height = GameCanvas.GAME_HEIGHT): any{
        // @ts-ignore
        let gameCanvas:HTMLCanvasElement = document.getElementById('gameCanvas');
        if (gameCanvas == undefined) {
            // @ts-ignore
            gameCanvas = document.createElement('canvas');
            gameCanvas.id = 'gameCanvas';
            gameCanvas.width = width;
            gameCanvas.height = height;
            document.body.appendChild(gameCanvas);
        }
        console.log('gameCAnvas', gameCanvas);
        return gameCanvas;
    }
}
