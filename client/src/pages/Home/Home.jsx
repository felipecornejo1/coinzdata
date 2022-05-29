import { useState } from 'react'
import { State } from '../../Context'
import { CryptoTable } from '../../sections/index'
import TextField from '@mui/material/TextField'

function Home() {
    const { allCryptos } = State()

    const tableTitles = ['#', 'Name', 'Price', '24h %', 'Market Cap', 'Circulating Supply']

    const [searchQuery, setSearchQuery] = useState(null)
    
    return(
        <main id="home">
            <TextField fullWidth label="Search" id="fullWidth" onChange={(e) => {setSearchQuery(e.target.value.toLowerCase())}} />

            <CryptoTable
                allCryptos={allCryptos}
                tableTitles={tableTitles}
                color="white"
                searchQuery={searchQuery}
            />
        </main>
    )
}

export default Home