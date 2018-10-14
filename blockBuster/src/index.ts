import Vector from "./vector";
import Game from "./game";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const canvas = document.getElementById("gameScreen");
const ctx: CanvasRenderingContext2D = canvas["getContext"]("2d");

let game = new Game(Vector.create(GAME_WIDTH, GAME_HEIGHT));
game.init();

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
