import { PersonagemView } from './components/personagem-view.js'
import { Mago } from './modules/mago.js'
import { Arqueiro } from './modules/arqueiro.js'
import { ArqueiroMago } from './modules/arqueiro-mago.js'

const mago = new Mago('Jamal', 4, 'Fogo', 4, 3)
const maga = new Mago('July', 8, 'Gelo', 7, 10)
const arqueiroMagoIsmael = new ArqueiroMago('Ismael', 10, 10, 'ar', 10, 10)
const arqueiroVitor = new Arqueiro('Vitor', 3, 3)

const personagens = [mago, maga, arqueiroVitor, arqueiroMagoIsmael]

new PersonagemView(personagens).render()
