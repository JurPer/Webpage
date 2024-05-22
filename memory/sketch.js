
let memGrid;
const topPad = 50

function setup() {
    let canvasParent = document.getElementById("canvascontainer")
    let canvas = createCanvas(canvasParent.clientWidth, canvasParent.clientHeight);
	canvas.parent(canvasParent);

    /*
    console.log("width:" + canvasParent.clientWidth)
    console.log("height:" + canvasParent.clientHeight)
    */

   background(0);
   frameRate(10);

   memGrid = new Grid(width / 2 - 110 * 2, 
                    height / 2 - 110 * 2 + topPad, 
                    100, 100, 10, 4, 4, 
                    color(0, 120, 255));
}

function draw() {
    background(0, 155, 255);
    memGrid.show();
}

function mousePressed(event) {
    if (event.type == "mousedown") {
        let col = Math.floor((event.x - memGrid.x) / (memGrid.width + memGrid.pad));
        let row = Math.floor((event.y - memGrid.y) / (memGrid.height + memGrid.pad));
        if (!(col < 0 || row < 0) && !(col >= memGrid.cols || row >= memGrid.rows)) {
            memGrid.grid[row][col] = true;
        }
    }
}

class Grid {
    constructor(x, y, width, height, pad, rows, cols, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.pad = pad;
        this.rows = rows;
        this.cols = cols;
        this.color = color;
        this.grid = [];
        for (let i = 0; i < this.rows; i++) {
            let tmp = [];
            for (let j = 0; j < this.cols; j++) {
                tmp.push(false);
            }
            this.grid.push(tmp)
        }
    }

    show() {
        noStroke();
        fill(this.color);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.grid[i][j]) {
                    fill(255);
                } else {
                    fill(this.color)
                }
                rect(this.x + (this.width + this.pad) * j, 
                    this.y + (this.height + this.pad) * i, 
                    this.width, this.height, 10)
            }
        }
    }
}