
console.log(5);

class BMI {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    CalBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

let x = new BMI(1.75, 160);
let res = x.CalBMI();

console.log(parseInt(res));