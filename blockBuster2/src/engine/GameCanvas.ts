export class GameCanvas {

    static CANVAS_ID = 'gameCanvas';

    static GAME_WIDTH = 800;
    static GAME_HEIGHT = 600;

    static getCanvas(width = GameCanvas.GAME_WIDTH, height = GameCanvas.GAME_HEIGHT): any{
        // @ts-ignore
        let gameCanvas:HTMLCanvasElement = document.getElementById(GameCanvas.CANVAS_ID);
        if (gameCanvas == undefined) {
            // @ts-ignore
            gameCanvas = document.createElement('canvas');
            gameCanvas.id = GameCanvas.CANVAS_ID;
            gameCanvas.width = width;
            gameCanvas.height = height;
            document.body.appendChild(gameCanvas);
        }
        return gameCanvas;
    }
}
