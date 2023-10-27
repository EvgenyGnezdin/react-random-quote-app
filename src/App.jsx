import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState('')
  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        setAdvice(res.data.slip.advice)
      })
      .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchAdvice()
  },[])
  
  return (
    <div>
      <div className='container'>
        <h1 className='advice'>{advice}</h1>
        <button className='btn-advice' onClick={() => fetchAdvice()}>Click Me</button>
      </div>
    </div>
  )
}

export default App
