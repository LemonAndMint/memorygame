
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const collisionCanvas = document.getElementById('collisionCanvas');
const collisionCtx = collisionCanvas.getContext('2d');

console.log(collisionCanvas.width + "  " + collisionCanvas.height);

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

const CARD_COLUMN_COUNT = 4; // Cift sayi olmali \ Corpyr.
const CARD_COUNT = CARD_COLUMN_COUNT * CARD_COLUMN_COUNT;

var cards = [];
var currentCard = null;
var score = 0;

function main(){

    Card.sheetImg.src = '../materials/spritesheet_uno_large.png';

    spawnCards();
    revealCards();
    update();

}

function revealCards(){

    cards.forEach(card => {

        card.isRevealed = true;
    
    });

    setTimeout(() => {

        cards.forEach(card => {

            card.isRevealed = false;
        
        });


    }, 1000);

}

function update(){

    drawElements();
    requestAnimationFrame(update);

}

function drawElements(){

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //tek seferde ortak olarak temizleme 
    collisionCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    cards.forEach(card => {

        card.display();
    
    });

}

function spawnCards(){

    var selectedCards = [];

    for(let x = 0 ; x < (CARD_COUNT / 2) ; x++){

        let id = Util.getID(selectedCards);

        selectedCards.push(id, id);
  
    }

    Util.shuffle(selectedCards);

    var index = 0;

    for(let i = 0 ; i < CARD_COLUMN_COUNT ; i++){

        for(let k = 0 ; k < CARD_COLUMN_COUNT ; k++){
            
            let id = selectedCards[index];

            let textureRow = id % 12;
            let textureColumn = Math.round(id / 12);
        
            cards.push(new Card(id, Math.floor(Card.sheetWidth / 14) * textureRow, Math.floor(Card.sheetHeight / 4) * textureColumn,
                                    Card.cardWidth * k, Card.cardHeight * i));

            index++;

        }
    }

}

function compareCards(card){

    if( currentCard == null ){

        currentCard = card;

    }
    else if( currentCard.id == card.id ){

        score++;

        currentCard.isFound = true;
        card.isFound = true;
        
        currentCard = null;

    }
    else if( currentCard.id != card.id ){

        console.log("game over");

    }

}

function win(){



}

function gameOver(){

}


window.addEventListener('click', function(e){

    var pos = Util.getMousePos(collisionCanvas, e);
    const detectPixelColor = collisionCtx.getImageData(pos.x, pos.y, 1, 1);

    const pc = detectPixelColor.data;

    cards.forEach(object => {

        if (object.randomColors[0] === pc[0] && object.randomColors[1] === pc[1] && object.randomColors[2] === pc[2]){

            compareCards(object);
            object.isRevealed = true;
       
        }

    });

});

main();