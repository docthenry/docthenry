// Parent class 
class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    //Encapsulation
    getName() {
      return this.name;
    }
  
    // Abstraction:
    hasBackbone() {
      throw new Error('should be implemented by child class');
    }
  
    // Abstration: 
    getBloodType() {
        throw new Error('should be implemented by child class');
    }
  
    // Polymorphism: Method to display name and type of animal
    displayInfo() {
      console.log(`Name: ${this.name}, Type: ${this.type}`);
    }
  }
  
  // Inheritance: arthropa child class
  class Arthropoda extends Animal {
    constructor(name) {
      super(name, 'Arthropoda');
    }
  
    // Polymorphism: 
    hasBackbone() {
      return 'has no backbone';
    }

    getBloodType() {
        return 'Cold-blooded';
    }
  }
  
  // Inheritance: fish child class
  class Fish extends Animal {
    constructor(name) {
      super(name, 'Fish');
    }
  
    // Polymorphism
    hasBackbone() {
      return 'has backone';
    }
  
    // Polymorphism
    getBloodType() {
      return 'Cold-blooded';
    }
  }
  
  // Inheritance: amphibia child class
  class Amphibia extends Animal {
    constructor(name) {
      super(name, 'Amphibia');
    }
  
    // Polymorphism
    hasBackbone() {
      return 'has backbone';
    }
  
    // Polymorphism
    getBloodType() {
      return 'Cold-blooded';
    }
  }
  
  // Inheritance: reptile child class
  class Reptiles extends Animal {
    constructor(name) {
      super(name, 'Reptiles');
    }
  
    // Polymorphism: 
    hasBackbone() {
      return 'has backbone';
    }
  
    // Polymorphism: 
    getBloodType() {
      return 'Cold-blooded';
    }
  }
  
  // Inheritance: aves child class
  class Aves extends Animal {
    constructor(name) {
      super(name, 'Aves');
    }
  
    // Polymorphism: 
    hasBackbone() {
      return 'has backbone';
    }
  
    // Polymorphism: 
    getBloodType() {
      return 'Warm-blooded';
    }
  }
  
  // Inheritance: mammals child class
  class Mammals extends Animal {
    constructor(name) {
      super(name, 'Mammals');
    }
  
    // Polymorphism
    hasBackbone() {
      return 'has backbone';
    }
  
    // Polymorphism: Overriding getBloodType method
    getBloodType() {
      return 'Warm-blooded';
    }
  }
  
  // Example usage:
  const butterfly = new Arthropoda('Butterfly');
  const tilapia = new Fish('Tilapia');
  const frog = new Amphibia('Frog');
  const tortoise = new Reptiles('Tortoise');
  const sparrow = new Aves('Sparrow');
  const cat = new Mammals('Cat');
  
  
  // Polymorphism: using same displayInfo() on different animals to get different results
  butterfly.displayInfo();
  tilapia.displayInfo();
  frog.displayInfo();
  tortoise.displayInfo();
  sparrow.displayInfo();
  cat.displayInfo();
  
  console.log(`${butterfly.getName()}: ${butterfly.hasBackbone()}, and is ${butterfly.getBloodType()}`);
  console.log(`${tilapia.getName()}: ${tilapia.hasBackbone()}, and is ${tilapia.getBloodType()}`);
  console.log(`${frog.getName()}: ${frog.hasBackbone()}, and is ${frog.getBloodType()}`);
  console.log(`${tortoise.getName()}: ${tortoise.hasBackbone()}, and is ${tortoise.getBloodType()}`);
  console.log(`${sparrow.getName()}: ${sparrow.hasBackbone()}, and is ${sparrow.getBloodType()}`);
  console.log(`${cat.getName()}: ${cat.hasBackbone()}, and is ${cat.getBloodType()}`);
  