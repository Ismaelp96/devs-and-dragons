import { Personagem } from './personagem.js'

export class Guerreiro extends Personagem {
  ataque
  defesa
  velocidade
  static tipo = 'Guerreiro'
  static descricao = 'Guerreiro impiedoso'

  constructor(nome, ataque, defesa, velocidade) {
    super(nome)
    this.ataque = ataque
    this.defesa = defesa
    this.velocidade = velocidade
  }
  obterInsignia() {
    if (this.ataque >= 5 && this.defesa >= 5) {
      return `Mestre da espada`
    }
    return super.obterInsignia()
  }
}
