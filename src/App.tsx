import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { ThemeProvider } from 'styled-components'
import theme from './assets/styles/theme'
import { Container } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
        <ThemeProvider theme={theme}>
          <ResponsiveAppBar/>
          <Container maxWidth="xl" >
            <Outlet/>
          </Container>
        </ThemeProvider>
    </div>
  )
}

export default App
