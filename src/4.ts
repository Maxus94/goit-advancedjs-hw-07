class Key {
    constructor(private signature: number) {

    }
    getSignature(): number {
        return this.signature;
    }
}

const key = new Key(Math.random());

class Person {
    private key: Key;
    constructor(key: Key) {
        this.key = key
    }
    getKey(): Key {
        return this.key;
    }
}

const person = new Person(key);

abstract class House {
    protected tenants: Person[] = [];
    protected door: boolean = false;
    protected key: Key;
    constructor(key: Key) {
        this.key = key;
    }
    public abstract openDoor(key: Key): void;
    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person)
        }
    }
}

class MyHouse extends House {

    public openDoor(key: Key): void {
        if (key === this.key) {
            this.door = true;
        } else {
            this.door = false;
        }

    }
}


const house = new MyHouse(key);


house.openDoor(person.getKey());

house.comeIn(person);


export { };