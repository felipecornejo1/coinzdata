import { useEffect, useState } from 'react'
import { Home, Detail } from './pages/index'
import { Routes, Route } from 'react-router-dom'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
   // Get all data from json file
   const getDataFromJson = () => {
    fetch('cryptos.json')
        .then(response => {return response.json()})
        .then(allCryptos => {
            setAllCryptos(allCryptos)
        })
        .catch(err => {
            console.log(err)
        })
} 

useEffect(()=>{
    getDataFromJson()
}, [])

const [allCryptos, setAllCryptos] = useState([])
  return (
    <>
      <header></header>
      <Routes>
            <Route path='/detail/:id' element={< Detail 
            allCryptos={allCryptos}
            />} />
            <Route path='/detail' element={< Detail />} />
            <Route path='/' element={< Home />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
