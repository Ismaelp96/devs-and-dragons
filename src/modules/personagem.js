export class Personagem {
  nome
  vida
  mana
  level
  tipo
  descricao

  constructor(nome, level) {
    this.nome = nome
    this.level = level
  }
  obterInsignia() {
    if (this.level >= 5) {
      return `${this.tipo} Implacavel`
    }
    return `${this.tipo} iniciante`
  }
}
