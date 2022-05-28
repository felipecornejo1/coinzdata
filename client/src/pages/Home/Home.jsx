import { Link } from 'react-router-dom'
import { State } from '../../Context'

function Home() {
    const { allCryptos } = State()

    const tableTitles = ['#', 'Name', 'Price', 'Market Cap', 'Circulating Supply']

    return(
        <>
            <div className="container">
                <div className="row">
                    <table className='table table-dark table-hover'>
                        <thead>
                            <tr>
                                {tableTitles.map(title => (
                                    <td key={title}>{title}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {allCryptos.map((crypto, index) => (
                                    <tr>
                                        <td><Link to={'/detail/' + crypto.index}>{index+1}</Link></td>
                                        <td><Link to={'/detail/' + crypto.index}><img src={crypto.image} alt={crypto.name} className="home__crypto-icon" /> {crypto.name}</Link></td>
                                        <td><Link to={'/detail/' + crypto.index}>${crypto.current_price}</Link></td>
                                        <td><Link to={'/detail/' + crypto.index}>${crypto.market_cap !== 0 ? parseInt(crypto.market_cap).toLocaleString() : '?'}</Link></td>
                                        <td><Link to={'/detail/' + crypto.index}>{crypto.circulating_supply !== 0 ? crypto.circulating_supply.toLocaleString() : '?'} </Link></td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home