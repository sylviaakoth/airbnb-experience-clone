import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App';
import Navbar from './Navbar'
import './index.css'

function App() {
   return (
    <div>
       <Navbar />
    </div>
   )
}

ReactDOM.render(<App />, document.getElementById("root"))
