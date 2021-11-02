// Code your solutions in this file
const cards= ["Lisa","Kaitlin","Jan"];

    function writeCards() {
        const phrase=[]
      for (let i = 0; i <cards.length; i++) {
        phrase.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
                    }
           
            return phrase;                           
        } 
    
        
      
    writeCards(["Lisa","Kaitlin","Jan"]);

    function countDown(integer){
        while(integer>=0){
            console.log(integer);
            integer--;

        }
    }
   