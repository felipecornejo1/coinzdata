import { Home, Detail } from './pages/index'
import { Header } from './sections/index'
import { Routes, Route } from 'react-router-dom'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Material UI Theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
palette: {
  mode: 'dark',
},
});

function App() {
  return (
    <>
      <ThemeProvider theme={ darkTheme }>
        <Header/>
        <Routes>
              <Route path='/detail/:id' element={< Detail 
              />} />
              <Route path='/detail' element={< Detail />} />
              <Route path='/' element={< Home />} />
        </Routes>
        <footer></footer>
      </ThemeProvider>
    </>
  );
}

export default App;
