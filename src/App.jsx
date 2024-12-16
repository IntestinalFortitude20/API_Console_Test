import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


const URL = "https://official-joke-api.appspot.com/random_joke"

function App() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(null)

    

    async function getData() {

        //const response = await fetch('https://opentdb.com/api.php?amount=1')
        //const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_city=chicago')


        const response = await fetch('cluebase.lukelav.in/clues/')
        //const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        //const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        
        response.json().then(json => console.log(json))
        
            //.then(response => response.json())
            //.then(json => console.log(json))
    
        //const response = await fetch(URL) 
        //setData(response)
    }

    useEffect(() => { getData(), [] })

  return (
    <>
          <h1>Check console for info.</h1>


    </>
  )
}

export default App


//<div>
//        <a href="https://vite.dev" target="_blank">
//          <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <h1>Vite + React</h1>
//      <div className="card">
//        <button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>
//        <p>
//          Edit <code>src/App.jsx</code> and save to test HMR
//        </p>
//      </div>
//      <p className="read-the-docs">
//        Click on the Vite and React logos to learn more
//      </p>


