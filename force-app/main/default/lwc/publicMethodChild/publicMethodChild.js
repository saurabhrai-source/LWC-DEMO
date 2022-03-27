import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['red','green'];

    options = [
        { label: 'Red Marker', value: 'red' },
        { label: 'Blue Marker', value: 'blue' },
        { label: 'Green Marker', value: 'green' },
        { label: 'Black Marker', value: 'black' },
    ]

    @api
    selectCheckBox(checkBoxValue){
        const selectedCheckBox = this.options.find(checkbox => {
            return checkBoxValue === checkbox.value;
        } )

        if(selectedCheckBox){
            this.value = selectedCheckBox.value;
            return "Successfuly checked";
        }
        return "No Checkbox found";
        
    }
}