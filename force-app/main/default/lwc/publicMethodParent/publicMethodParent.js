import { LightningElement, track } from 'lwc';

export default class PublicMethodParent extends LightningElement {

    @track value;

    checkBoxValueChangeHandler(event){
        this.value = event.target.value;
    }

    checkBoxSelectHandler(event){
        const childComponent = this.template.querySelector('c-public-method-child');
        childComponent.selectCheckBox(this.value);
    }

}