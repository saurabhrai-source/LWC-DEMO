import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {

    cardTitle = 'BMI Calculator';

    weight;
    height;
    calculatedBMI;
    @track historicalBMIs = [];

    getBMIHandler(event){
        
        this.calculatedBMI = this.weight/(this.height*this.height);
        this.historicalBMIs.push(this.calculatedBMI);
    }

    weightInKgHandler(event){
        console.log(event.target.value);
        this.weight = parseFloat(event.target.value);
        console.log(this.weight);
    }

    heightInMeterHandler(event){
        console.log(event.target.value);
        this.height = parseFloat(event.target.value);
        console.log(this.height);
    }
}