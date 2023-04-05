import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <div>NAV BAR AQUI</div>
      <Outlet/>
    </div>
  )
}

export default App
