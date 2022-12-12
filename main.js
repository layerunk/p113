function preload(){
    //empty
}

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.position(600 , 50);
    sup = createCapture(VIDEO);
    sup.hide();
    rainbow = "";
}

function draw(){
    image(sup, 0, 0, 300, 300);
    circle(10, 300, 50);
    circle(300, 300, 50);
    circle(5, 2.5, 50);
    circle(300, 5, 50);
}

function take_snapshot(){
    save("IMG999.png");
}