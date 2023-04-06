import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { ThemeProvider } from 'styled-components'
import theme from './assets/styles/theme'
import { Container } from '@mui/material'
import { FavoriteProvider } from './context/FavoriteContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
        <ThemeProvider theme={theme}>
          <ResponsiveAppBar/>
          <FavoriteProvider>
            <Container maxWidth="xl" >
              <Outlet/>
            </Container>
          </FavoriteProvider>
        </ThemeProvider>
    </div>
  )
}

export default App
