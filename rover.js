class Rover {
   // Write code here!

   constructor(position){
     this.position = position;

     if (!this.position){
       throw Error("Position required.");
     }
     this.mode = 'NORMAL';
     this.generatorWatts = 110;
   }
   receiveMessage(message){
    let messageObj = {
      name: message.name,
      results: [message.commands]
    };
    return messageObj;
   }
}

module.exports = Rover;