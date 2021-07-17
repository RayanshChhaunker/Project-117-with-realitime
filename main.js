function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vA-Kjk7Dh/model.json', modelLoaded)
}
function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, getResult);
}
function modelLoaded() {
    console.log("Model loaded");
}
function getResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("realtextob").innerHTML = results[0].label;
        document.getElementById("realtextac").innerHTML = results[0].confidence.toFixed(3);
    }
}