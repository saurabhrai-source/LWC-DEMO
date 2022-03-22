import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    @track currentResult = '';
    @track previousResults = [];
    @track showPreviousResults = false;
    firstNumber = '';
    secondNumber = '';

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber')
            this.firstNumber = event.target.value;
        else if (inputBoxName === 'secondNumber')
            this.secondNumber = event.target.value;
    }

    multiplyHandler(){
        if(this.firstNumber != '' && this.secondNumber != '')
        {
            this.currentResult = `Result of ${this.firstNumber} * ${this.secondNumber} is equal to ${parseInt(this.firstNumber) * parseInt(this.secondNumber)}`;
            this.previousResults.push(this.currentResult);
        }
        else{
            this.currentResult = '';
        }
        
    }

    divideHandler(){
        if(this.firstNumber != '' && this.secondNumber != '')
        {
            this.currentResult = `Result of ${this.firstNumber}/${this.secondNumber} is equal to ${parseInt(this.firstNumber)/parseInt(this.secondNumber)}`;
            this.previousResults.push(this.currentResult);
        }

        else
        {
            this.currentResult = '';
        }
    }

    subtractHandler(){
        if(this.firstNumber != '' && this.secondNumber != '')
        {
            this.currentResult = `Result of ${this.firstNumber} - ${this.secondNumber} is equal to ${parseInt(this.firstNumber) - parseInt(this.secondNumber)}`;
            this.previousResults.push(this.currentResult);
        }
        else{
            this.currentResult = '';
        }
    }

    addHandler(){
        if(this.firstNumber != '' && this.secondNumber != '')
        {
            this.currentResult = `Result of ${this.firstNumber} + ${this.secondNumber} is equal to ${parseInt(this.firstNumber) + parseInt(this.secondNumber)}`;
            this.previousResults.push(this.currentResult);
        }

        else{
            this.currentResult = '';
        }
    }

    showPreviousResultsToggle(event){
        this.showPreviousResults = event.target.checked;
    }

}