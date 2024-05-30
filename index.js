// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
  
    for (let n = 0; n < names.length; n++) {
      const name = names[n];
      const message = `Thank you, ${name}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
  
    return messages;
}

function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}