import React, { createContext, useContext, useEffect, useState } from 'react'

const Data = createContext()

function Context({children}) {
  // Get all data from json file
  const getDataFromJson = () => {
    fetch('https://coinzdata-api.herokuapp.com')
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
        <Data.Provider value={{allCryptos}}>
            {children}
        </Data.Provider>
    )
}

export default Context

export const State = () => {
    return useContext(Data)
}