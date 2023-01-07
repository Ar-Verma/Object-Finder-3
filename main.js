objects = [];
status = "";

function setup() {
    canvas = createCanvas(640, 380);
    canvas.position(360, 260);
    video = createCapture(VIDEO);
    video.size(640, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    name_of_object = document.getElementById("find").value;
}

function modelLoaded() {
    console.log('Model Loaded!');
    status = true;
}

function draw() {
    image(video, 0, 0, 640, 380);
    if(status != "") {
        for(i = 0; i <= object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Detecting Objects";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}