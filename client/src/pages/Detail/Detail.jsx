import chart from '../../assets/img/chart.ppm'
import { useParams } from 'react-router-dom'
import { State } from '../../Context'

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
                </div>
                <img src={chart} alt="chart" id='chart' />
                <div className="detail__crypto-data">
                    <div className="detail__data-set">
                        <p className="detail__data-set__label">Price</p>
                        <p>${crypto.current_price}</p>
                    </div>
                    <div className="detail__data-set">
                        <p className="detail__data-set__label">Market Cap</p>
                        <p>${crypto.market_cap}</p>
                    </div>
                    <div className="detail__data-set">
                        <p className="detail__data-set__label">Circulating Supply</p>
                        <p>{crypto.circulating_supply}</p>
                    </div>
                </div>

            </div>
            ) : (<div>lloading...</div>)}
            {/*  */}
        </main>
    )
}

export default Detail