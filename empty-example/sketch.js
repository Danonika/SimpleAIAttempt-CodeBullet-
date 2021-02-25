let goal;
function setup() {
  goal = createVector(400,10);
  const canvas = createCanvas(800,800);
  test = new Population(1000);
  // put setup code here
}

function draw() {
  background(180, 181, 254);
  fill(255,0,0);
  ellipse(goal.x,goal.y,10,10);
  if(test.allDotsDead()){
      test.calculateFitness();
      test.naturalSelection();
      test.mutateDenBabies();
  }else{
      test.update();
      test.show();
  }
  // put drawing code here
}