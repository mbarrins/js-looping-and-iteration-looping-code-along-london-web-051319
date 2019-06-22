// Code your solutions in this file
function writeCards(names, gift) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
  }
  return messages;
}

function countdown( num ) {
  while (num >= 0) {
    console.log( num );
    num -= 1
  }

}