import React from 'react'
import { Link } from 'react-router-dom'

function CryptoTable({allCryptos, tableTitles}) {
  return (
    <section id="home__crypto-table">
    <div className="container w-100 table-responsive ">
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
                            <tr key={index}>
                                <td key={index}><Link to={'/detail/' + crypto.index}>{index+1}</Link></td>
                                <td key={crypto.image}><Link to={'/detail/' + crypto.index}><img src={crypto.image} alt={crypto.name} className="home__crypto-icon" /> {crypto.name}</Link></td>
                                <td key={crypto.current_price}><Link to={'/detail/' + crypto.index}>${crypto.current_price}</Link></td>
                                <td key={crypto.market_cap + 'mk'}><Link to={'/detail/' + crypto.index}>${crypto.market_cap !== 0 ? parseInt(crypto.market_cap).toLocaleString() : '?'}</Link></td>
                                <td key={crypto.circulating_supply + 'cs'}><Link to={'/detail/' + crypto.index}>{crypto.circulating_supply !== 0 ? crypto.circulating_supply.toLocaleString() : '?'} </Link></td>
                            </tr>
                    ))}
                </tbody>
            </table>
    </div>
</section>
  )
}

export default CryptoTable