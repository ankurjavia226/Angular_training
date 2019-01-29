class Point {
    constructor(private _x?: number, private _y?: number){

    }
    draw (){
        console.log('X: '+ this._x + ', Y: ' + this._y);
    }

    get x(){
        return this._x;
    }

    set x(value){
        if(value < 0)
            throw new Error('value cannot be less then 0.')
        
        this._x = value;
    }
}

let point = new Point(1, 2);
let x = point.x;
point.x = 5;
point.draw();