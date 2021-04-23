// Code your solutions in this file

function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
       messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function countDown(numbers) {
  while (0 < numbers) {
    console.log(numbers)
    numbers -=1
  }
  console.log(numbers);
} 