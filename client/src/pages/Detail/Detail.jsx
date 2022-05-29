import { useParams } from 'react-router-dom'
import { State } from '../../Context'
import { CryptoChart } from '../../components/index'

function Detail() {
    const cryptoID = useParams().id
    const { allCryptos } = State()

    let crypto = allCryptos.filter(crypto => {
        return parseInt(crypto.index) === parseInt(cryptoID)
    })[0]


    return(
        
        <main id='detail'>
            {crypto ? (
                <div className="detail__container">
                <div className="detail__top">
                    <img src={crypto.image} alt={crypto.name} id="detail__crypto-image" />
                    <h1 className='detail__crypto-name'>{crypto.name}</h1>
                    <h2 className="detail__crypto-price">${crypto.current_price}</h2>
                    <h2 className="detail__crypto-change">${crypto.change_percentage_24h}</h2>
                </div>
                <div className="detail__crypto-data">
                    <div className="detail__data-set">
                        <p className="detail__data-set__label">Market Cap</p>
                        <p>${crypto.market_cap}</p>
                    </div>
                    <div className="detail__data-set">
                        <p className="detail__data-set__label">Circulating Supply</p>
                        <p>{crypto.circulating_supply} {crypto.symbol.toUpperCase()}</p>
                    </div>
                </div>
                < CryptoChart
                    crypto={crypto}
                />

            </div>
            ) : (<div>loading...</div>)}
            {/*  */}
        </main>
    )
}

export default Detail