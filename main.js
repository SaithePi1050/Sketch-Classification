function clearCanvas() 
{
    background("white");
}

function setup() 
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function draw() 
{
    //background(random(255), random(255), random(255));
    //circlex = random(255);
    //circley = random(255);
    //circleradis = random(50);

   //fill(random(255), random(255), random(255));
   
   //circle(circlex, circley, circleradis);  

   strokeWeight(5);
   stroke(0);
   if (mouseIsPressed) 
   {
    line(pmouseX, pmouseY, mouseX, mouseY);
   }
}

function preload() 
{
    classifier = ml5.imageClassifier('DoodleNet');
}

function classifyCanvas() 
{
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) 
{
    if (error) 
    {
        console.log(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}