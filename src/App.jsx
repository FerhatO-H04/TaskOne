import React from 'react'
import './App.css'
import Nav from "./nav"

function App() {
  
  return (
    <div className='container'>
      <Nav/>
      <main>
        <h1>Fun Facts About React</h1>
        <ul>
          <li>Was first realesed in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub </li>
          <li>Is maintained by Facebook</li>
          <li>Power thousands of enterprise app,including mobile apps</li>
        </ul>
      </main>
    </div>
  )
}

export default App
