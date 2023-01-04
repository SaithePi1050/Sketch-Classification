function clearCanvas() 
{
    background("white");
}

function setup() 
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}

function draw() 
{
    background(random(255), random(255), random(255));
    circlex = random(255);
    circley = random(255);
    circleradis = random(50);

   fill(random(255), random(255), random(255));
   
   circle(circlex, circley, circleradis);  
}