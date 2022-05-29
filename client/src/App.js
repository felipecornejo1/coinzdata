import { Home, Detail } from './pages/index'
import { Header } from './sections/index'
import { State } from './Context'
import { Routes, Route } from 'react-router-dom'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const { allCryptos } = State()
  console.log(allCryptos);
  return (
    <>
      <Header/>
      <Routes>
            <Route path='/detail/:id' element={< Detail 
            />} />
            <Route path='/detail' element={< Detail />} />
            <Route path='/' element={< Home />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
