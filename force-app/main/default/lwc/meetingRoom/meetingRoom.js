import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {

    @api meetingRoomInfo;
    @api showRoomInfo = false;

    titleClickHandler(event){
        const tileClicked = new CustomEvent('tileclicked', {detail : this.meetingRoomInfo, bubbles:true});
        this.dispatchEvent(tileClicked);
    }
}