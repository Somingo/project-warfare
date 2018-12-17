export class GameCanvas {

    static CANVAS_ID = 'gameCanvas';

    static GAME_WIDTH = 800;
    static GAME_HEIGHT = 600;

    static getCanvas(width = GameCanvas.GAME_WIDTH, height = GameCanvas.GAME_HEIGHT): any {
        // @ts-ignore
        let gameCanvas: HTMLCanvasElement = document.getElementById(GameCanvas.CANVAS_ID);
        if (gameCanvas == undefined) {
            // @ts-ignore
            gameCanvas = document.createElement('canvas');
            gameCanvas.id = GameCanvas.CANVAS_ID;
            document.body.appendChild(gameCanvas);
        }
        gameCanvas.width = width;
        gameCanvas.height = height;
        return gameCanvas;
    }

    static removeGameCanvas() {
        const gameCanvas = document.getElementById(GameCanvas.CANVAS_ID);
        if (gameCanvas) {
            document.body.removeChild(gameCanvas);
        }
    }
}
