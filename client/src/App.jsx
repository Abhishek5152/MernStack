import { useState } from 'react'
import './App.css'
import SimpleElemnt from './components/simpleElement'
import ComplexElement from './components/complexElement'
import {PropsDemo} from './components/propsDemo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PropsDemo/>
        <SimpleElemnt/>
        <ComplexElement/>
      </div>
    </>
  )
}

export default App
