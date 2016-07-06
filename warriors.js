function Warrior(name, gender){
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.power = Math.random(0,100)*100;
    this.weapon = "spoon";
}

Warrior.prototype = {
    fight: function(){
        console.log(this.name + " runs towards danger with a mighty " + this.weapon + ".");
    },
    faceoff: function(opponent){
        if(this.power > opponent.power) {
            console.log(this.name + " luckily managed to tickle his enemy to death");
        }
        else if(this.power === opponent.power) {
            console.log(this.name + " has truly fought hard, hard enough for both warriors to go out for lunch!");
        }
        else {
            console.log("Oh no! " + "Your village is mourning the death of " + this.name + ".");
        }
        }
   
};

var abcd = new Warrior("Max", "M");
var goliath = new Warrior("Goliath", "M")
abcd.fight()
abcd.faceoff(goliath)
