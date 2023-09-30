import { Personagem } from './personagem.js'
import { Arqueiro } from './arqueiro.js'
import { Mago } from './mago.js'

export class ArqueiroMago extends Personagem {
  ladoAqueiro
  ladoMago
  static tipo = 'ArqueiroMago'
  static descricao = 'Detentor de lancas e flechas mágicas!'

  constructor(
    nome,
    level,
    destreza,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome, level)
    this.ladoAqueiro = new Arqueiro(nome, level, destreza)
    this.ladoMago = new Mago(
      nome,
      level,
      elementoMagico,
      levelMagico,
      inteligencia
    )
  }
  obterInsignia() {
    return `${this.ladoAqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
  }
}
