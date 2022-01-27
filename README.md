# Ideias de jogos

1. [x] Jogo da velha
2. [] Jogo da forca
3. [] Palavra-cruzada
4. [] 21
5. [] Impar ou par
6. [] Pedra, Papel ou Eesoura

# Regras do jogo

*  Decidir quem vai ser o **jogador 1: X** ou **jogador2: O**

* se repete:
   * O jogador 1 escolhe uma das 9 posições iniciais e coloca o X,
   * O jogador 2 escolhe uma das 8 posições restantes e coloca a O,
   * O jogador 1 escolhe uma das 7 posições iniciais e coloca o X ...
* Até alguém vencer o jogo ou dar velha.

## Esquema do jogo da velha

Jogo         | coluna1   |  coluna2  |  coluna3  |
-------------| ----------| ----------| ----------|
**linha1**   |   [ 0 ]   |   [ 1 ]   |   [ 2 ]   |
**linha2**   |   [ 3 ]   |   [ 4 ]   |   [ 5 ]   |
**linha3**   |   [ 6 ]   |   [ 7 ]   |   [ 8 ]   |


## Como alguém vence o jogo?

1. **Na horizontal:** Se todos as 3 posições forem iguais em

``` js
   [0] - [1] - [2]      -> if(posicao[0] === posicao[1] === posicao[2])
   [3] - [4] - [5]      -> if(posicao[3] === posicao[4] === posicao[5])
   [6] - [7] - [8]      -> if(posicao[6] === posicao[7] === posicao[8])
```
2. **Na vertical:** Se todos as 3 posições forem iguais em

``` js
   [0] - [1] - [2]      -> if(posicao[0] === posicao[3] === posicao[6])
   [3] - [4] - [5]      -> if(posicao[1] === posicao[4] === posicao[7])
   [6] - [7] - [8]      -> if(posicao[3] === posicao[5] === posicao[8])
```
3. **Na diagonal:** Se todos as 3 posições forem iguais em

``` js
   [0] - [1] - [2]      -> if(posicao[0] === posicao[4] === posicao[8])
   [3] - [4] - [5]      -> if(posicao[2] === posicao[4] === posicao[6])
   [6] - [7] - [8]      
```
4. **Deu velha** quando nenhuma das alternativas anteriores for verdadeira

## O que precisamos usar?

1. Estrutura e tipo de dados
2. IF/Else
3. For e While
4. Funções
5. Estrutura de dados simples (Array)
6. Estrutura de dados complexos (Object)





