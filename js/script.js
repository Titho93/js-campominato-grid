

// 5. per ogni quadrato aggiungere un evento al click
// 6. al click del quadrato aggiungere/togliere(toggle) la classe del click
// 7. imposto una funzione in modo che al click del bottone venga generata la griglia

// 1. seleziono il container e lo salvo in una variabile
const container   = document.querySelector('.container');
// 2. Creo un bottone 
const startButton = document.getElementById("start");

// 3. faccio un ciclo su 100
for(let i = 1; i <= 100; i++){
  // 4.2. ad ogni ciclo devo far generare un quadrato
  const square = addSquare();
  console.log(i)
  
  container.append(square)
}

// 4.1. creo una funzione per generare quadrati 
function addSquare(){

  const newSquare = document.createElement('div');
  newSquare.className = 'square';

  return newSquare;

}