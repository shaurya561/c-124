function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNET = ml5.poseNET(video, modelLoaded);
    poseNET.on('poses', gotPoses);
}

function draw() {
    background('#969A97')
}

function modelLoaded() {
    console.log('PoseNET is initialized')
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results)
    }
}
