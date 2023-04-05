import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <ResponsiveAppBar/>
      <Outlet/>
    </div>
  )
}

export default App
