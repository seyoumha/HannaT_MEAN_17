class Ninja {
    constructor(name) {
        let speed = 3;
        let strength = 3;
        this.name = name;
        this.health = 100;
        Ninja.prototype.sayName = () => { console.log(this.name); return this; };
        this.showStats = () => { console.log("Name: " + name + ", Health:" + this.health + ", Speed: " + speed + ", Strength: " + strength); return this; };
        Ninja.prototype.drinkSake = () => { this.health += 10; };
        Ninja.prototype.punch = (ninja) => {
            if (ninja instanceof Ninja) {
                ninja.health -= 5;
                console.log(ninja.name + ' was punched by ' + this.name + ' and lost 5 health');
                return this;
            }
        };
        this.kick = (ninja) => {
            if (ninja instanceof Ninja) {
                ninja.health -= (strength*5)
            console.log(ninja.name + " was kicked by " + this.name + " and lost 15 Health!");
            }
        };
    }
}
// const ninja1 = new Ninja('Hyabusa');
// ninja1.sayName();
// ninja1.showStats();
const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);