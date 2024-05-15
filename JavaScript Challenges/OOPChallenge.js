class Dog {
    constructor(breed, color, height, weigth){
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weigth = weigth;
    }

    Shake(){
        console.log('Shake');
    }

    Sit(){
        console.log('Sit');
    }

    LayDown(){
        console.log('Lay Down');
    }

}


let dog = new Dog('Hound','Brown','2 feet', '60 pounds');
dog.Shake();
dog.Sit();
dog.LayDown();