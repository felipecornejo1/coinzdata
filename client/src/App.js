import { Routes, Route } from 'react-router-dom'
import { Home, Detail, NotFound } from './pages/index' // Pages
import { Header } from './sections/index' // Sections
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Material UI Theme
import { ThemeProvider, createTheme } from '@mui/material/styles'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Routes>
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
