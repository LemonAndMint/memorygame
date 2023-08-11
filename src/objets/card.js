class Card{

    static sheetImg = new Image();

    static sheetWidth = 8184;
    static sheetHeight = 3272;

    //#FIXME uto alsin degerleri \ Corpyr. 
    static cardWidth = 300 / 4; //initial value 40 \ Corpyr.
    static cardHeight = 150 / 4; //initial value 30 \ Corpyr.

    static frameWidth = Math.floor(Card.sheetWidth / 14);
    static frameHeight = Math.floor(Card.sheetHeight / 4);

    constructor(cardId, 
                textureX, textureY, 
                positionX, positionY){
    
        this.id = cardId;

        //hangi kart olacak o belirlenir \ Corpyr.
        this.textureX = textureX;
        this.textureY = textureY;
        
        //kart pozisyonu \ Corpyr.
        this.positionX = positionX;
        this.positionY = positionY;

        this.isRevealed = false;
        this.isFound = false;

        //collision detection \ Corpyr.
        this.randomColors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]; 
        this.color = 'rgb(' + this.randomColors[0] + ',' + this.randomColors[1] + ',' + this.randomColors[2] + ')';
                    
    }

    display(){

        if(!this.isFound){

            if(this.isRevealed){

                ctx.drawImage(Card.sheetImg, this.textureX, this.textureY, 
                                            Card.frameWidth, Card.frameHeight, 
                                            this.positionX, this.positionY , 
                                            Card.cardWidth, Card.cardHeight);

            }
            else{

                if(!Game.isOver){

                    collisionCtx.fillStyle = this.color;
                    collisionCtx.fillRect(this.positionX, this.positionY, Card.cardWidth, Card.cardHeight);

                }

                ctx.drawImage(Card.sheetImg, Math.floor(Card.sheetWidth / 14) * 13, Math.floor(Card.sheetHeight / 4) * 3, 
                                            Card.frameWidth, Card.frameHeight, 
                                            this.positionX, this.positionY , 
                                            Card.cardWidth, Card.cardHeight);
                
            }

        }
        
    }

    position(positionX, positionY){

        this.positionX = positionX;
        this.positionY = positionY;

    }



}