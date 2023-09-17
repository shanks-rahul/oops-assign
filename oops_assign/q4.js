class circle{
    constructor(number){
        this.radius = number;
    }
    calculateArea(){
        return Math.PI * (this.radius ** 2);
    }
    calculatePerimeter(){
        return  2*Math.PI*(this.radius) ;
    }
}

class Rectangle{
    constructor(length,breadth){
        this.length=length;
        this.breadth= breadth;
    }
    calculateArea() {
        return this.length * this.breadth;
    }
    calculatePerimeter() {
        return ((this.length + this.breadth)*2 );
    }
}

class Triangle{
    constructor(side1,side2,side3,side4){
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
        this.side4=side4;
    }
    calculateArea(){
        return this.side3*this.side4*0.5;
    }
    calculatePerimeter(){
        return this.side1+this.side2+this.side3;
    }
}

const Circle=new circle(10);
console.log("The area of the circle is: "+Circle.calculateArea());
console.log(`The perimeter of the circle is ${Circle.calculatePerimeter()}`);

const rectangle=new Rectangle(10,12);
console.log('the area of the rectangel is '+rectangle.calculateArea());
console.log (`the perimeter of the rectangle is${rectangle.calculatePerimeter()}`);

const triangle=new Triangle(5,6,10,8);
    console.log('area of the triangle'+triangle.calculateArea());
    console.log (`the perimeter of the triangle is${triangle.calculatePerimeter()}`);


