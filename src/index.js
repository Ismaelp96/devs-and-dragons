import { Personagem } from './modules/personagem.js'
import { PersonagemView } from './components/personagem-view.js'
import { Mago } from './modules/mago.js'

const mago = new Mago('Jamas', 4, 'Fogo', 4, 3)
const maga = new Mago('July', 8, 'Gelo', 7, 10)

const personagens = [mago, maga]

new PersonagemView(personagens).render()
