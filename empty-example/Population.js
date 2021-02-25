class Population{
    constructor(size){
        this.dots = [];
        this.fitnessSum = 0.0;
        this.gen = 1;
        for(let i = 0;i < size;i ++){
            this.dots[i] = new Dot();
        }
    }
    show(){
        this.dots.forEach(i => i.show());
    }
    update(){
        this.dots.forEach(i => i.update());
    }
    calculateFitness(){
        this.dots.forEach(i => i.calculateFitness());
    }
    allDotsDead(){
        return this.dots.every(i => i.dead || i.reachedGoal); 
    }
    naturalSelection(){
        let newDots = [];
        this.calculateFitnessSum();

        for(let i = 0;i < this.dots.length;i ++){
            let parent = this.selectParent();
            newDots[i] = parent.gimmeBaby();
        }
        this.dots = [];
        for(let i = 0;i < newDots.length;i ++){
            this.dots[i] = newDots[i];
        }
        this.gen++;
    }
    calculateFitnessSum(){
        this.fitnessSum = 0.0;
        this.dots.forEach(i => this.fitnessSum += i.fitness);
    }
    selectParent(){
        let rand = random(this.fitnessSum);
        let curSum = 0.0;
        for(let i = 0;i < this.dots.length;i ++){
            curSum += this.dots[i].fitness;
            if(curSum > rand){
                return this.dots[i];
            }
        }
        return null;
    }
    mutateDenBabies(){
        this.dots.forEach(i => i.brain.mutate());
    }
}