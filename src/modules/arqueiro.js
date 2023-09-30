import { Personagem } from './personagem.js'

export class Arqueiro extends Personagem {
  atqCritico
  velocidadeAtq
  destreza
  tipo = 'Arqueiro'

  constructor(nome, level, destreza) {
    super(nome, level)
    this.destreza = destreza
  }

  obterInsignia() {
    if (this.atqCritico >= 5 && this.destreza >= 5) {
      return `Mestre Arquerio`
    }
    return super.obterInsignia()
  }
}
