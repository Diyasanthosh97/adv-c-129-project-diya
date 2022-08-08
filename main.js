song2="";
score_lefty=0;
playorno="";
song1="";
leftWristX=0;
rightWristY=0;
leftWristY=0;
rightWristX=0;
function preload(){
song2=loadSound("song2.mp4");
song1=loadSound("song1.mp4")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}
function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000")
    if(scoreLeft > 0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop()
    }
    if(song1==false){
        song1.play();
        document.getElementById("play_btn").innerHTML="Kaun tughe";
    }
}
function play(){
song1.play();
song2.play();
song.setVolume(1);
song.rate(1);
}

function modelLoaded(){
    console.log("model is successfully loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log("results");
        scoreLeft=results[0].pose.keypoints[9].score;
        console.log(scoreLeft);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist x="+rightWristX+"right wrist y"+rightWristY+"left wrist x"+leftWristX+"left wrist y"+leftWristY);
    }
}