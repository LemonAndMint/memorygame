class Util{

    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array \ Corpyr.
    static shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    static getID(array){

        do {
            
            var selectedID = Math.floor((Math.random() * 12) * (Math.random() * 3));
            var isUniqe = true;

            array.forEach(item => {

                if(item == selectedID){ isUniqe = false; }

            });

        } 
        while (!isUniqe && array.length > 0);

        return selectedID;

    }

    //https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
    //+ https://stackoverflow.com/questions/58242505/cannot-get-the-correct-position-of-mouse-movement-or-canvas-height-while-using-c
    
    static getMousePos(canvas, evt) {
        
        var rect = canvas.getBoundingClientRect();
        var widthScale = canvas.width / rect.width;
        var heightScale = canvas.height / rect.height;
        
        return {
          x: (evt.clientX - rect.left) * widthScale,
          y: (evt.clientY - rect.top) * heightScale,
        };

    }

}