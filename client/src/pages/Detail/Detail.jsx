import { useEffect } from 'react'
import chart from '../../assets/img/chart.ppm'

function Detail(props) {
    console.log(props.allCryptos)
    function fetchData(){
        fetch('https://starknights-api.herokuapp.com/items')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        
        <main id='detail'>
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
        </main>
    )
}

export default Detail