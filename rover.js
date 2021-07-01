class Rover {
   // Write code here!

   constructor(position){
     this.position = position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110;
     if (!this.position){
       throw Error("Position required.");
     }
   }
  //  roverStatus = [this.position, this.mode, this.generatorWatts];
   receiveMessage(message){
    let messageObj = {
      name: message.name,
      results: message.commands,
      };
      for (let i=0; i < messageObj.results.length; i++){
      if (messageObj.results[i]['commandType'] === 'STATUS_CHECK'){
        this.roverStatus = [this.mode, this.generatorWatts, this.position];
      } 
      if (messageObj.results[i]['commandType'] === 'MODE_Change'){
       if(messageObj.results[i]['value'] === 'LOW_POWER'){
         this.mode = 'NORMAL';
         this.completed = true;
    } else if(messageObj.results[i]['value'] === 'NORMAL'){
        this.mode = 'LOW_POWER';
        this.completed = true;
        }
      }
    } 
    
    return messageObj;
   }
}
module.exports = Rover;