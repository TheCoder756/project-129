scoreLeftWrist = 0;
status_song = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

song_left_wrist = "";
song_right_wrist = "";

function preload() {
    song_left_wrist = loadSound("Sweater Weather.mp3");
    song_right_wrist = loadSound("Dandelions.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

      poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

status_song = song_left_wrist.isPlaying();

fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
    
        circle(leftWristX,leftWristY,20);
    
    song_right_wrist.stop();

    if(status_song = false)
    {
        song_left_wrist.play();

        document.getElementById("song_name").innerHTML = "The song playing is " + song_left_wrist;
    }

    }
}




function gotPoses(results)
{
    if(results.length > 0)
    {
console.log(results);
scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = " + scoreLeftWrist);
       
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = " + leftWristY) 
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = " + rightWristY) 
    }
}

