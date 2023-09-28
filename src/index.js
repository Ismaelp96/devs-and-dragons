import { Personagem } from './modules/personagem.js'

const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.mana = 12
personagemPedrinho.vida = 7
personagemPedrinho.tipo = 'Mago'
personagemPedrinho.level = 5

const personagemJose = new Personagem()
personagemJose.nome = 'Jose'
personagemJose.tipo = 'Arqueiro'
personagemJose.level = 3

console.log(
  'Insignia de ' +
    personagemPedrinho.nome +
    ': ' +
    personagemPedrinho.obterInsignia()
)
console.log(
  'Insignia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia()
)