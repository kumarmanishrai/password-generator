
import { useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('')

  const genratePassword = () => {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&%*"
    let pass = '';
    for(let i=0; i<15; i++){
      let index = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }

  return (
    <div className="main">
      {/* heading */}
      <h1>Password Generator</h1>

      {/* Card */}
      <div className="card">
        <button onClick={genratePassword}>Generate Password</button>
      </div>

      {/* Password and Copy section */}
      <div className="clipboard">
        <p>{password}</p>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(password)
            alert("copied to clipbaord")
          }}
        >Copy</button>
      </div>

    </div>
  )
}

export default App
