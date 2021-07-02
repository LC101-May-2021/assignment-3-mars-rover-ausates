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

     modeChange(){
       if (this.mode === 'NORMAL'){
         this.mode = 'LOW_POWER';
       } else if (this.mode === 'LOW_POWER'){
         this.mode = 'NORMAL'
       }
     }

     move(num){
       this.position = this.position + num;
       return this.position;
     }
   
  //  roverStatus = [this.position, this.mode, this.generatorWatts];
   receiveMessage(message){
    let messageObj = {
      name: message.name,
      results: [],
      };

      for (let i = 0; i< message.commands.length; i++){
        messageObj.results.push(message.commands[i]);
      }
      for (let i=0; i < message.commands.length; i++){
      if (message.commands[i]['commandType'] === 'STATUS_CHECK'){
        messageObj.results.splice(i, 1, `{completed: true, roverStatus: {mode: ${this.mode}, generatorWatts: ${this.generatorWatts}, position: ${this.position}}}`)
      } else if (message.commands[i]['commandType'] === 'MODE_CHANGE'){
        messageObj.results.splice(i, 1, `{completed: true}`)
        this.modeChange();
      } else if (message.commands[i]['commandType'] === 'MOVE'){
        if (this.mode === 'LOW_POWER'){
          messageObj.results.splice(i, 1, `{completed: false}`)
        } else {
          let num = message.commands[i]['value'];
          messageObj.results.splice(i, 1, `{completed: true}`);
          this.position = this.move(num);
        } 
      } else {
          messageObj.results.splice(i, 1, '{completed: false}')
        }
      } 
    return messageObj;
   }
}
module.exports = Rover;

/* messageObj.results.splice(i, 1, `{completed: true, roverStatus: {mode: ${this.mode}, generatorWatts: ${this.generatorWatts}, position: ${this.position}}}`) */