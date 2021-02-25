class Brain{
    constructor(size){
        this.directions = [];
        this.step = 0;
        this.mutationRate = 0.01;
        this.randomize(size);
    }
    randomize(size){
        for (var i = 0; i< size; i++) {
            let angle = random(2*PI);
            this.directions[i] = createVector(Math.cos(angle),Math.sin(angle));
        }
    }
    clone(){
        const clone = new Brain(this.directions.length);
        for(let i = 0;i < this.directions.length;i ++){
            clone.directions[i] = this.directions[i].copy();
        }
        return clone;
    }
    mutate(){
        for(let i = 0;i < this.directions.length;i ++){
            let rand = random(1);
            if(rand < this.mutationRate){
                let angle = random(2*PI);
                this.directions[i] = createVector(Math.cos(angle),Math.sin(angle));
            }
        }
    }
}