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
    tenants: Person[];
    door: boolean = false;
    key: Key;
    constructor(key: Key){

    }
    public abstract openDoor(key: Key): void;
    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person)
         }
    }
}

class MyHouse extends House{
    constructor(key: Key){
        super(key);
    }
    public openDoor(key: Key) {
        if(key === this.key){
        this.door = true;
    }else{
        this.door = false;
    }
    
}}


const house = new MyHouse(key);


house.openDoor(person.getKey());

house.comeIn(person);


export { };