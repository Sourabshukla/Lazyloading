import { lazy, Suspense, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import User from './User' // for lazy loading comment
// import './App.css'
const User =lazy(()=>import('./User'));

function App() {
const [load,setLoad]=useState(false)
  return (
    <div>
      <h1>Lazy loading</h1>
      {
        load ?<Suspense fallback={<h3>loading</h3>}> <User /></Suspense>:null
      }
      <button onClick={()=>setLoad(true)}>Load user</button>
    </div>
  );
}

export default App
