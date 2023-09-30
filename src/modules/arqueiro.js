import { Personagem } from './personagem.js'

export class Arqueiro extends Personagem {
  atqCritico
  velocidadeAtq
  destreza
  static tipo = 'Arqueiro'
  static descricao = 'Você tem o meu arco!'

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
