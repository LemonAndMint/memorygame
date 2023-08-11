class Game{

    static isOver = false;
    static isEnded = false;

    constructor(cardCount){

        this.cardCount = cardCount;

    }

    revealCards(){

        cards.forEach(card => {
    
            card.isRevealed = true;
        
        });
    
        setTimeout(() => {
    
            cards.forEach(card => {
    
                card.isRevealed = false;
            
            });
    
    
        }, 4000);
    
    }

    spawnCards(){

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

    compareCards(card){

        if( currentCard == null ){
    
            currentCard = card;
    
        }
        else if( currentCard.id == card.id ){
    
            score++;
    
            currentCard.isFound = true;
            card.isFound = true;
            
            currentCard = null;

            this.winCondition();
    
        }
        else if( currentCard.id != card.id ){
    
            Game.isOver = true;
    
        }
    
    }

    winCondition(){

        console.log(score);
        if(score == (this.cardCount / 2)){

            Game.isEnded = true;

        }

    }

    drawScore(){

        normalCanvasctx.fillStyle = 'black';
        normalCanvasctx.font = '10pt Calibri';
        normalCanvasctx.fillText('Score: ' + score, 5, 15);
    
    }

    drawGameover(){

        normalCanvasctx.fillStyle = 'black';
        normalCanvasctx.font = '10pt Calibri';
         //#FIXME literallari degiskenlere bagla / Corpyr.
        normalCanvasctx.fillText('GAMEOVER', Math.floor(normalCanvas.width / 2) - 30, Math.floor(normalCanvas.height / 2) + 5);

    }

    drawGameWon(){

        normalCanvasctx.fillStyle = 'black';
        normalCanvasctx.font = '10pt Calibri';
         //#FIXME literallari degiskenlere bagla / Corpyr.
        normalCanvasctx.fillText('YOU FOUND ALL CARDS' , Math.floor(normalCanvas.width / 2) - 60, Math.floor(normalCanvas.height / 2) + 5);

    }


}