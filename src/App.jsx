import { useState } from 'react'
import reactlogo from '/reactlogo.svg'
import './App.css'

function App() {
  
  return (
    <div className='container'>
      <nav>
        <img src="/reactlogo.svg" alt="" />
        <h1>ReactFacts</h1>
        <h3>React Course - Project 1</h3>
      </nav>
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
