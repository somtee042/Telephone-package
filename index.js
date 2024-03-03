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
        this.observers.forEach(observer => observer.update(phoneNumber));
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
        console.log("Added:", phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        this.phoneNumbers.delete(phoneNumber);
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.notifyObservers(phoneNumber);
        } else {
            console.log(`Phone number ${phoneNumber} is not found`);
        }
    }
}

class PhoneObserver {
    update(phoneNumber) {
        console.log("Phone number:", phoneNumber);
    }
}

class UserObserver {
    update(phoneNumber) {
        console.log("Calling:", phoneNumber);
    }
}

const telephone = new Telephone();

const phoneNumberObserver = new PhoneObserver();
const dialingObserver = new UserObserver();

telephone.addObserver(phoneNumberObserver);
telephone.addObserver(dialingObserver);

telephone.addPhoneNumber('2347023232');
telephone.dialPhoneNumber('2347023232');