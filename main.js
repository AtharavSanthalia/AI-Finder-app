video = "";
status="";
objects = [];

function setup() {
    canvas = createCanvas(440, 320);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {
    image(video, 0, 0, 440, 320);
    if(status != "")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            
            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y + 15);
            noFill(); 
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}



function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objects = " input_text";
}

function modelLoaded()
{
    console.log("ModelLoaded!");
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);

    }
    console.log(results);
}