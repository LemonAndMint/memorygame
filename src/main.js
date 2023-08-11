
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const normalCanvas = document.getElementById('normalCanvas');
const normalCanvasctx = normalCanvas.getContext('2d'); 

normalCanvas.clientHeight

const collisionCanvas = document.getElementById('collisionCanvas');
const collisionCtx = collisionCanvas.getContext('2d');

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

const CARD_COLUMN_COUNT = 4; // Cift sayi olmali \ Corpyr.
const CARD_COUNT = CARD_COLUMN_COUNT * CARD_COLUMN_COUNT;

var cards = [];
var currentCard = null;
var score = 0;

var game = new Game(CARD_COUNT);

function main(){

    Card.sheetImg.src = '../materials/spritesheet_uno_large.png';

    game.spawnCards();
    game.revealCards();
    update();

}


function update(){

    clearCanvases();

    if(!Game.isEnded){

        drawCards();
        game.drawScore();
        requestAnimationFrame(update);

    }
    else{

        if(Game.isOver){
        
            game.drawGameover();
    
        }
        else{

            game.drawGameWon();

        }

    }

}

function drawCards(){
    
    cards.forEach(card => {

        card.display();
    
    });

}

function clearCanvases(){

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //tek seferde ortak olarak temizleme 
    collisionCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    normalCanvasctx.clearRect(0, 0, normalCanvas.width, normalCanvas.height);

}

window.addEventListener('click', function(e){

    var pos = Util.getMousePos(collisionCanvas, e);
    const detectPixelColor = collisionCtx.getImageData(pos.x, pos.y, 1, 1);

    const pc = detectPixelColor.data;

    cards.forEach(object => {

        if (object.randomColors[0] === pc[0] && object.randomColors[1] === pc[1] && object.randomColors[2] === pc[2]){

            game.compareCards(object);
            object.isRevealed = true;
       
        }

    });

});

main();