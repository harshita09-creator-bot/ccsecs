img ="";
object = [];
status = "";

function preload(){
    img = loadImage("plants.jpeg");
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(425,175);
    objectdectection = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status2").innerHTML= "Status : Detecting Object(s)";
}


function modelLoaded(){
console.log("Model Loaded!");
status = true;
objectdectection.detect(img,gotResults);
}

function gotResults(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("bottom-line2").innerHTML="There are "+results.length+" objects in this picture."
    object = results;
}
}

function draw(){
    image(img,0,0,600,450);
    if(status != ""){
        for(i = 0; i < object.length; i++){
    
        document.getElementById("status").innerHTML= "Status : Object(s) Detected";
        percent = floor(object[i].confidence * 100);
        noFill();
        stroke("#FF0000");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
        text(object[i].label + " " + percent + "%",object[i].x + 15,object[i].y+15);
        }
    }
}

function back(){
    window.location = "index.html";
}

