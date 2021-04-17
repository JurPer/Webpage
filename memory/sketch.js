

function setup() {
    let canvasParent = document.getElementById("canvascontainer")
    let canvas = createCanvas(canvasParent.clientWidth, canvasParent.clientHeight);
	canvas.parent(canvasParent);
    /*
    console.log("width:" + canvasParent.clientWidth)
    console.log("height:" + canvasParent.clientHeight)
    */
   background(0);
}

function draw() {
    //frameRate(10);
    background(50);
    background(200);
}
