trigger AccountTrigger on Account (before insert, before update, after insert, after update) {

    if(Trigger.isInsert && Trigger.isBefore){
            for(Account account : Trigger.new){
                    account.Description = account.Name + ' Account Description';
            }        
    }    
}