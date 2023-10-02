import { Personagem } from './personagem.js'
import { Arqueiro } from './arqueiro.js'
import { Mago } from './mago.js'

export class ArqueiroMago extends Personagem {
  ladoAqueiro
  ladoMago
  static tipo = 'ArqueiroMago'
  static descricao = 'Detentor de lancas e flechas mágicas!'

  constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome)
    this.ladoAqueiro = new Arqueiro(nome, destreza)
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
  }
  obterInsignia() {
    return `${this.ladoAqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
  }
}
