import { Personagem } from './modules/personagem.js'
import { PersonagemView } from './components/personagem-view.js'
import { personagemMago } from './modules/personagemMago.js'

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago')
const personagemJose = new Personagem('Jose', 3, 'Arqueiro')

const magoFogo = new personagemMago('Fogo', 10, 25)

const personagens = [personagemPedrinho, personagemJose]

new PersonagemView(personagens).render()

console.log(personagemJose.vida)
console.log(magoFogo)
