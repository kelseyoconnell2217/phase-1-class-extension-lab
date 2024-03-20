class Polygon{
    constructor(sides){
        this.sides = sides
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce((accumulator, side) => accumulator + side, 0)
    }

}

class Triangle extends Polygon{
    get isValid(){
        if (this.countSides === 3){ 
           if((this.sides[0] < (this.sides[1] + this.sides[2])) && (this.sides[1] < (this.sides[0] + this.sides[2])) && (this.sides[2] < (this.sides[1] + this.sides[0]))){
            return true
           }  
        }return false
    } 
}

class Square extends Polygon{
    get isValid(){
        if (this.countSides === 4){ 
           if((this.sides.reduce((accumulator, side) => accumulator + side, 0)) / 4 === this.sides[0]){
            return true
            } 
       }return false
    }

    get area(){
       if(this.isValid === true){return this.sides[0]*this.sides[1]
    }
}
}
