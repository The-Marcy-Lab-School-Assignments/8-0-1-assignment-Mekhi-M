import { useState } from 'react'
import './App.css'

// component imports
import { FontSizeButtons } from './components/FontSizeButtons'
import { Greeting } from './components/Greeting'
import { LanguageButtons } from './components/LanguageButtons'


function App() {
  const [fontSizeEM, setFontSizeEM] = useState(3.2)

  const increment = () => fontSizeEM < 4.2 ? setFontSizeEM( f => f + .2) : undefined
  const decrement = () => fontSizeEM > 2.2 ? setFontSizeEM( f => f - .2) : undefined

  const [greeting, setGreeting] = useState('Good Morning')

  const english = () => setGreeting('Good Morning')
  const spanish = () => setGreeting('Buenos Dias')
  const chinese = () => setGreeting('早上好 (Zǎoshang hǎo)')
  const japanese = () => setGreeting('おはよう (Ohayō)')
  const haitian = () => setGreeting('Bonjou')
  const hawaiian = () => setGreeting('Aloha kakahiaka')

  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <FontSizeButtons 
        increment={increment} 
        decrement={decrement} />
      <Greeting greeting={greeting} size={fontSizeEM}/>
      <LanguageButtons 
        english={english} 
        spanish={spanish} 
        chinese={chinese} 
        japanese={japanese} 
        haitian={haitian} 
        hawaiian={hawaiian}/>
    </section>
  )
}

export default App
