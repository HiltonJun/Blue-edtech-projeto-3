const prompt = require('prompt-sync')();
// Variáveis
let rodadas = 0;
let players = 0;
const jogadores = [];
const vencedores = [];
let vencedor = 0;
let nome ='';
let maior = 0;

//Funções

const random = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function builder(x) {
    x = {
    nome:'',
    rolagem:0,
    pontos:0,
}
jogadores.push(x);
}

//checagem número de players e de jogadores 

do{
    rodadas = +prompt(`Digite o número de rodadas que deseja jogar: `);
    console.log();
    players = +prompt(`Digite o número de jogadores: `);
    console.log();
    if(isNaN(rodadas) || rodadas < 0){
        console.clear();
        console.log(`Número de rodadas inválido.
        `);
    }else if (isNaN(players) || players < 0 && players % 1 != 0){
        console.clear();
        console.log(`Número de jogadores inválido.
        `);
    }
}while (isNaN(rodadas) || rodadas < 0 || isNaN(players) || players < 0 && players % 1 != 0);

// Construção de jogadores

for (c = 0; c < players; c++){
    console.clear();
    nome = prompt(`Digite o nome do jogador ${c+1}: `);
    builder(c);
    jogadores[c].nome = nome;
    console.clear();
}

//Jogando
for(e = 0; e < rodadas; e++){
    console.log();
    console.log(`${e+1}º Rodada.
    `);
    for (i = 0; i < jogadores.length; i++){
        jogadores[i].rolagem = random(0,6);
        console.log(`O jogador ${jogadores[i].nome} rolou ${jogadores[i].rolagem}!`);       
    }
    for (const jogador of jogadores){
        if(jogador.rolagem > maior){
            maior = jogador.rolagem;
        }
    }
    for (const jog of jogadores){
        if (jog.rolagem == maior){
            jog.pontos += 1;
        }
    }
}
// Placar final

for (const joga of jogadores){
    if (joga.pontos > vencedor){
        vencedor = joga.pontos;
    }
}
for(const jogad of jogadores){
    if (jogad.pontos == vencedor){
        vencedores.push(jogad.nome);
    }
}

console.log(`
O(s) grande(s) vencedor(es): ${vencedores}!!`);