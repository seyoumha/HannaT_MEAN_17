class Deck{
    constructor(){
        this.deck=[]
    }

    reset(){
        this.deck=[]
        const labels = ['diamonds', 'spades', 'clubs', 'hearts', ]
        const nums = ['A',1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King' ]
        for(const label in labels){
            for(const num in nums){
                this.deck.push(`${nums[num]} of ${labels[label]}`);
            }
        }
        return this.deck
    }
    shuffle(){
        let l = this.deck.length, h, i;
        while (l){
            i = Math.floor(Math.random() * l--);
            h = this.deck[l]
            this.deck[l]= this.deck[i]
            this.deck[i]= h
        }
        return this.deck 
    }
    
    deal(){
        return this.deck.pop();
    }
}

class Player{
    constructor(name){
    this.name=name;
    this.hand = [];
    }

    take_card(deck){
        this.hand.push(deck.deal())
        return this;
    }
    discard_card(){
        this.hand.pop()
        return this;
    }

}
const deck1 = new Deck();
deck1.reset()
// console.log(deck1);
deck1.shuffle()
// console.log(deck1);

const player1 = new Player('john');
player1.take_card(deck1)
console.log(player1);
console.log(deck1);
