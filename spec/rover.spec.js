const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function(){

  it('constructor sets position and default values for mode and generatorWatts', function(){
    let rover = new Rover(99999);
    let defaults = [rover.position, rover.mode, rover.generatorWatts];
    expect(defaults).toEqual([99999, 'NORMAL', 110])
  })

  it('response returned by receiveMessage contains name of message', function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    expect(response.name).toEqual('Test message with two commands');
  })
});