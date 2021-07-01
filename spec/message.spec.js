const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect( function() { new Message();}).toThrow(new Error('Name required.'));
  });

it("constructor sets name", function(){
  let message = new Message('Test message with two commands');
  expect(message.name).toEqual('Test message with two commands')
});

it("contains a commands array passed into the constructor as 2nd argument", function(){
  let cmd1 = 'test1';
  let cmd2= 'test2';
  let cmdArr = [cmd1, cmd2];
  let message = new Message('Test message with two commands', cmdArr);
  expect(message.commands).toEqual(cmdArr);
});

});