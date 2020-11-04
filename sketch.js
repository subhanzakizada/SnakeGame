var s 
var scl = 20
var food

function setup() {
    createCanvas(600, 600)
    s = new Snake()
    frameRate(10)
    
    pickLocation()
}

pickLocation = function() {
    var cols = floor(width / scl)
    var rows = floor(height / scl)
    food = createVector(floor(random(cols)), floor(random(rows)))
    food.mult(scl)
    
    
}
function draw() {
    background(51)
    s.update()
    s.show()
    s.death()
    fill(255, 0, 0)
    rect(food.x, food.y, scl, scl)
    if(s.eat(food)) {
        pickLocation()
    }
   
    
}



function keyPressed() {
    if(keyCode === 37) {
        s.dir(-1, 0)
    } else if(keyCode === 39) {
    s.dir(1, 0)
    } else if(keyCode === 38) {
    s.dir(0, -1)
    } else if(keyCode === 40) {
    s.dir(0, 1)
    }
}






