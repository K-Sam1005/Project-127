harry_potter = "";
peter_pan = "";

function preload(){
    harry_potter.loadSound("harry_potter.mp3");
    peter_pan.loadSound("peter_pan.mp3");
}

function setup(){
    canvas = createCanvas(650,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 650, 500);
}