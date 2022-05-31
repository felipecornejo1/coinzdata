// This component stores all states to make them accessible by every other component
// To access a state variable, the component must import the 'State' function from this component
import React, { createContext, useContext, useEffect, useState } from 'react'

const Data = createContext()

export default function Context({ children }) {
  // States
  const [allCryptos, setAllCryptos] = useState([])
  const [watchlist, setWatchlist] = useState([])

  // Get all cryptos from json file
  const getDataFromJson = () => {
    fetch('https://coinzdata-api.herokuapp.com')
      .then((response) => {
        return response.json()
      })
      .then((allCryptos) => {
        setAllCryptos(allCryptos)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Fill watchlist with data from localstorage

  useEffect(() => {
    getDataFromJson()
  }, [])

  return (
    <Data.Provider value={{ allCryptos, watchlist, setWatchlist }}>
      {children}
    </Data.Provider>
  )
}

export const State = () => {
  return useContext(Data)
}
