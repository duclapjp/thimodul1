class Animal{
    constructor(_name,_weight) {
        this.name = _name;
        this.weight = _weight;
    }
    setName(newName){
        this.name = newName;
    }
    setWeight(newWeight){
        this.weight = newWeight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        return this.getName()+""+this.getWeight();
    }
}

let objAnimal1 = new Animal('Element',45.6);
objAnimal1.toString();
let objAnimal2 = new Animal('Element2',64);
objAnimal2.setName('Mouse');
