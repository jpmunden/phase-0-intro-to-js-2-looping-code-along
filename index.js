// Code your solutions in this file

const names = ["Charlie", "Samip", "Ali"]

function writeCards(names, occasion) {
  let birthday =[];
  occasion = "surprise";
  for (let i= 0; i < names.length; i++) {
  birthday[i] = 'Thank you, '+ names[i] +', for the wonderful ' +occasion+' gift!';
  debugger;
  }
  return birthday;
}

number = 10;
function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}