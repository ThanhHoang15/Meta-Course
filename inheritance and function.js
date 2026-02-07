class Person{ 
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    } 
    sleep(){
        this.energy += 10;
        console.log("energy increase by 10", this.energy)
    }
    doSomethingFun (){
        this.energy -= 10;
        console.log("energy decrease by 10", this.energy)
    }
}

class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy){
        super(name,age,energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
        
    }
    goToWork () {
        this.xp += 10;
        console.log("increase xp 10 " + this.xp);
    }
}

function intern() {
    const intern = new Worker(10, 10, "Bob", 21, 110);
    intern.goToWork();
    return intern;
}

function manager(){
    const manager = new Worker (100, 30, "Alice", 30, 120);
    manager.doSomethingFun();
    return manager;
}

intern();
manager();