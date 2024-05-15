class Shape{
    constructor(color){
        this.color = color;
    }
    
    getArea(){

    }
}


class Rectangle extends Shape{
    constructor(height, width){
        super();
        this.height = height;
        this.width = width;
    }

    getArea(){
        return this.height * this.width;
    }

}


class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }

    getArea(){
        return this.base * this.height;
    }

}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
   
    }

    getArea(){
        return this.radius;
    }

}