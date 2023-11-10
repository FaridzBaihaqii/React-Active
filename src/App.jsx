import { useState } from 'react'
import logo from './assets/logo.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
        <div>
            <a href="https://instagram.com/mhmmdfrdz26_" target="_blank">
            <img src={logo} className="logo" alt="logo" />
            </a>
        </div>
        <h1>Belajar React Active</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            Jumlah Yang Klik {count}
            </button>
        </div>
        <p className="read-the-docs">
          saya sedang mencoba Belajar React
        </p>
        </div>
    )
}

export default App
