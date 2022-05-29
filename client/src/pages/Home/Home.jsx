import { State } from '../../Context'
import { CryptoTable } from '../../sections/index'

function Home() {
    const { allCryptos } = State()

    const tableTitles = ['#', 'Name', 'Price', 'Market Cap', 'Circulating Supply']

    return(
        <main id="home">
            <CryptoTable
                allCryptos={allCryptos}
                tableTitles={tableTitles}
            />
        </main>
    )
}

export default Home