difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = crreateCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoases(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw(){
    background('#800000')
}