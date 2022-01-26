let jogoDaVelha = 

['O', 'X', 'X', 
'X', 'O', 'X', 
'O', 'X', 'O'
]

// NA HORIZONTAL
for (let i = 0; i<=8; i+=3) {
   if (jogoDaVelha[i] === 'X' && jogoDaVelha[i+1]  === 'X' && jogoDaVelha[i+2]  === 'X'){
      console.log("O jogador X venceu na horizontal")
      console.log(`${jogoDaVelha[i]} - ${jogoDaVelha[i+1]} - ${jogoDaVelha[i+2]}`)
   }

   if (jogoDaVelha[i] === 'O' && jogoDaVelha[i+1]  === 'O' && jogoDaVelha[i+2]  === 'O'){
      console.log("O jogador O venceu na horizontal")
      console.log(`${jogoDaVelha[i]} - ${jogoDaVelha[i+1]} - ${jogoDaVelha[i+2]}`)
   }
}

// NA VERTICAL
for(let i = 0; i <= 2; i++) {
   if (jogoDaVelha[i] === 'X' && jogoDaVelha[i+3] === 'X' && jogoDaVelha[i+6] === 'X' ) {
      console.log("O jogador X venceu na vertical")
      console.log(`${jogoDaVelha[i]} - ${jogoDaVelha[i+3]} - ${jogoDaVelha[i+6]}`)
   }  
   if (jogoDaVelha[i] === 'O' && jogoDaVelha[i+3] === 'O' && jogoDaVelha[i+6] === 'O' ) {
      console.log("O jogador O venceu na vertical")
      console.log(`${jogoDaVelha[i]} - ${jogoDaVelha[i+3]} - ${jogoDaVelha[i+6]}`)
   }
}

if (jogoDaVelha[0] === 'X' && jogoDaVelha[4] === 'X' && jogoDaVelha[8] === 'X' ) {
   console.log("O jogador X venceu na diagonal")
   console.log(`${jogoDaVelha[0]} - ${jogoDaVelha[4]} - ${jogoDaVelha[8]}`)
}  
if (jogoDaVelha[2] === 'X' && jogoDaVelha[4] === 'X' && jogoDaVelha[6] === 'X' ) {
   console.log("O jogador X venceu na diagonal")
   console.log(`${jogoDaVelha[2]} - ${jogoDaVelha[4]} - ${jogoDaVelha[6]}`)
}


if (jogoDaVelha[0] === 'O' && jogoDaVelha[4] === 'O' && jogoDaVelha[8] === 'O' ) {
   console.log("O jogador O venceu na diagonal")
   console.log(`${jogoDaVelha[0]} - ${jogoDaVelha[4]} - ${jogoDaVelha[8]}`)
}  
if (jogoDaVelha[2] === 'O' && jogoDaVelha[4] === 'O' && jogoDaVelha[6] === 'O' ) {
   console.log("O jogador O venceu na diagonal")
   console.log(`${jogoDaVelha[2]} - ${jogoDaVelha[4]} - ${jogoDaVelha[6]}`)
}



/*
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]
*/