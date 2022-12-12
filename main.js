function preload(){
    //empty
}

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.position(500 , 100);
    spy = createCapture(VIDEO);
    spy.hide();
    rainbow = "";
}

function draw(){
    image(spy, 0, 0, 300, 300);
    tint(rainbow);
}
function take_snapshot(){
    save("IMG666.png");
}
function filter12(){
    rainbow = document.getElementById("inputbox").value;
}