
import { useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('')
  const [isCapital , setIsCapital] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
  const [isNumber, setIsNumber] = useState(false)
  const [isSpecial, setIsSpecial] = useState(false)

  // let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&%*"
  let str = ""
  let pass = '';
  const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const small = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "0123456789"
  const special = "@#$&%*"

  const genratePassword = () => {
    if(isCapital){ 
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      pass += capital.charAt(Math.floor(Math.random*capital.length +1))
    }
    if(isSmall){
      str += "abcdefghijklmnopqrstuvwxyz"
      pass += small.charAt(Math.floor(Math.random*small.length +1))
    }
    if(isNumber){
      str += "0123456789"
      pass += numbers.charAt(Math.floor(Math.random*numbers.length +1))
    }
    if(isSpecial){
      str += "@#$&%*"
      pass += special.charAt(Math.floor(Math.random*special.length +1))
    }

    for(let i=0; i<12; i++){
      let index = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(index)
    }
    setIsCapital(false)
    setIsSmall(false)
    setIsNumber(false)
    setIsSpecial(false)
    setPassword(pass)
  }

  return (
    <div className="main">
      {/* heading */}
      <h1>Password Generator</h1>

      {/* Card */}
      <div className="card">
        <div className="field1">
          <input type="checkbox" name="isCapital" checked={isCapital} id="" onChange = {()=>setIsCapital(!isCapital)} />
          <h5>Capital Letters</h5>
        </div>
        <div className="field2">
          <input type="checkbox" name="isSmall" checked={isSmall} id="" onChange = {()=>setIsSmall(!isSmall)} />
          <h5>Small Letters</h5>
        </div>
        <div className="field3">
          <input type="checkbox" name="isNumbers" checked={isNumber} id="" onChange = {()=>setIsNumber(!isNumber)} />
          <h5>Numbers</h5>
        </div>
        <div className="field4">
          <input type="checkbox" name="isSpecial" checked={isSpecial} id="" onChange = {()=>setIsSpecial(!isSpecial)} />
          <h5>Special Characters</h5>
        </div>
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
