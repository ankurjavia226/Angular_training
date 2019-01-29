class Point{
    constructor(public x?: number, private y?:number){
        
    }

    draw(){
        console.log('x: ' + this.x + ', y: ' + this.y);
    }
}

let point = new Point(1, 2);
point.draw();