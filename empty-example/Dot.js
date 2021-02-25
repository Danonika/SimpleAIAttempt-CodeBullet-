class Dot{
    constructor(){
        this.pos = createVector(width/2,height - 20);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.brain = new Brain(400);
        this.dead = false;
        this.fitness = 0.0;
        this.reachedGoal = false;   
    }
    show(){
        fill(0, 0, 255);
        stroke(0);
        strokeWeight(4);
        ellipse(this.pos.x,this.pos.y,4,4);
    }
    move(){
        if(this.brain.directions.length > this.brain.step){
            this.acc = this.brain.directions[this.brain.step];
            this.brain.step ++;
        }else{
            this.dead = true;
        }
        this.vel.add(this.acc);
        this.vel.limit(5);
        this.pos.add(this.vel);
    }
    update(){
        if(!this.dead && !this.reachedGoal){
            this.move();
            if(this.pos.x < 2|| this.pos.y < 2|| this.pos.x > width - 2|| this.pos.y > height - 2){
                this.dead = true;
            }else if(dist(this.pos.x,this.pos.y,goal.x,goal.y) < 5){
                this.reachedGoal = true;
            }
        }
    }
    calculateFitness(){
        if(this.reachedGoal){
            this.fitness = 1.0 /  (this.brain.step * this.brain.step)
        }else{
            let distanceToGoal = dist(this.pos.x,this.pos.y,goal.x,goal.y);
            this.fitness = 1.0 / (distanceToGoal * distanceToGoal);
        }
    }
    gimmeBaby(){
        const baby = new Dot();
        baby.brain = this.brain.clone();
        return baby;
    }
}