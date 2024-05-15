function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
      if(x.trim() == "") throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10) throw "is too high";
      if(x < 5) throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Error: " + err + ".";
    }
    finally {
      document.getElementById("demo").value = "";
    }
  }

// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object:

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);

  function myFunc(id){
    document.getElementById(id).innerHTML =myCar1.name + " " + myCar2.name;
  }


  function myFuncES6(id){
    var  x = 10;
        // Here x is 10
        {  
        const x = 2;
        // Here x is 2
        }
        // Here x is 10
        document.getElementById(id).innerHTML = x;
  }

 