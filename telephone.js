class PhoneObserver {
    constructor(name) {
        this.name = name;
    }

    update(phoneNumber) {
        console.log(`${this.name}: ${phoneNumber}`);
    }
}

class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => {
            observer.update(phoneNumber);
        });
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        this.phoneNumbers.delete(phoneNumber);
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            console.log(`Dialling: ${phoneNumber}`);
            this.notifyObservers(phoneNumber);
        } else {
            console.log(`Phone number ${phoneNumber} not found.`);
        }
    }
}

const observer1 = new PhoneObserver("Observer 1");
const observer2 = {
    update: function(phoneNumber) {
        console.log(`Now Dialling ${phoneNumber}`);
    }
};

// Creating instance of Telephone
const telephone = new Telephone();

// Adding observers to telephone
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Adding phone numbers
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2345678901");

// Dialling a phone number
telephone.dialPhoneNumber("1234567890"); // number was added
telephone.dialPhoneNumber("2347023232"); // number wasnt added
// Removing phone number
telephone.removePhoneNumber("1234567890");

// Dialling a removed phone number
telephone.dialPhoneNumber("1234567890"); 
