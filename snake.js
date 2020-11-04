function Snake() {
    this.x = 0
    this.y = 0
    this.xSpeed = 1
    this.ySpeed = 0
    this.total = 0
    this.tail = []
        
    
    
    this.death = function() {
        if(this.x + scl >= width || this.x <= 0) {
            if(this.y <= 0 || this.y + scl >= height) {
                this.total = 0
                this.tail = []
            }
        }
        for(var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i]
            var d = dist(this.x, this.y, pos.x, pos.y)
            if(d < 1) {
                this.total = 0
                this.tail = []
            }
        }
    }
    
    
    this.update = function() {
        if(this.total === this.tail.length) {
            for(var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1]
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y)
        
        this.x = this.x + this.xSpeed * scl
        this.y = this.y + this.ySpeed * scl
        
        this.x = constrain(this.x, 0, width - scl)
        this.y = constrain(this.y, 0, height - scl)
    }
    
     this.show = function() {
        fill(255)
        for(var i = 0; i < this.total; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl)
        }
        rect(this.x, this.y, scl, scl)
    }
    
     
    
    
    this.dir = function(x, y) {
        this.xSpeed = x
        this.ySpeed = y
    }
    
    
    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y)
        if(d < 1) {
            this.total++
            return true            
        } else{
            return false
        }
    }
}

