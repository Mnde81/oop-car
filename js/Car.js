export class Car {
    constructor(pavadinimas, modelis, spalva, bakoTalpa, kuroLikutis, vidKuroSanaudos100km) {
        this.make = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.tankCapacity = bakoTalpa;
        this.fuelLeft = kuroLikutis;
        this.fuelConsumption = vidKuroSanaudos100km;
        this.isEngineOn = false;
        this.speed = 0;
    }

    turnEngineOn() {
        if (this.isEngineOn === false) {
            this.isEngineOn = true;
            return `Variklis ijungtas.`;
        } else {
            return `Ijungto variklio dar karta ijungti negalima, galima sugadinti starteri.`;
        }
    }

    turnEngineOff() {
        if (this.speed > 0) {
            return `Pries bandydami isjungti varikli pilnai sustokite.`;
        }
        if (this.isEngineOn === true) {
            this.isEngineOn = false;
            return `Variklis isjungtas.`;
        } else {
            return `Isjungto variklio variklio isjungti negalima.`;
        }
    }

    inStartDrivingModeKm(km) {
        if (this.isEngineOn === false) { 
            return `Pries pradedant vaziuoti ijunkite varikli.`
        } else {        
        this.speed = 90;
        this.fuelLeft = this.fuelLeft - 2 * this.fuelConsumption * km / 100;
        return `Automobilis pradejo vaziuoti. Isibegejimo atstumas ${km} km.`;
        }
    }

    inDrivingModeKm(km) {
        if (this.isEngineOn === false) { 
            return `Pries vaziuojant ijunkite varikli.`
        } else {  
        this.speed = 90;
        this.fuelLeft = this.fuelLeft - this.fuelConsumption * km / 100;
        return `Automobilis vaziuoja ${km} km atstuma.`;
        }
    }

    stopDriving() {
        if (this.speed > 0) {       
        this.speed = 0;             
        return `Automobilis sustojo.`;
        } else {
            return `Automobilis nejuda.`
        }
    }

    fuelLeftInTankLiters() {
        return `Automobilio bake liko ${this.fuelLeft} litru kuro.`;
    }

    fillTankWithFuel(liters) {
        if (this.isEngineOn === true) {
            return `Pries pildami kura isjunkite varikli.`;
        } else {
            let filledLiters = 0;
            if (this.fuelLeft === this.tankCapacity) {
                return `Automobilio kuro bakas pilnas, daugiau uzpilti negalima.`;
            }
            if (liters > (this.tankCapacity - this.fuelLeft)) {
                filledLiters = this.tankCapacity - this.fuelLeft;  
                this.fuelLeft = this.tankCapacity;                
                return `Norejote uzpilti ${liters} litru kuro. Uzpilta ${filledLiters} litru kuro. Bakas pilnas. Kuro likutis bake ${this.fuelLeft} litru.`            
            }
            if (liters < (this.tankCapacity - this.fuelLeft)) {                      
                this.fuelLeft = this.fuelLeft + liters;              
                return `Uzpilta ${liters} litru kuro. Kuro likutis bake ${this.fuelLeft} litru.`;            
            } 
        }       
    }
}