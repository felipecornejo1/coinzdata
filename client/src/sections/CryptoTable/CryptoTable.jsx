import React from 'react'
import { Link } from 'react-router-dom'

function CryptoTable({allCryptos, tableTitles, searchQuery}) {
   let filteredCryptos = []
   allCryptos.map(crypto => {
       if(crypto.name.toLowerCase().includes(searchQuery))
       filteredCryptos.push(crypto)
   })
    console.log(filteredCryptos);
    if(!searchQuery) {
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
                                  <td key={crypto.current_price} ><Link to={'/detail/' + crypto.index}>${crypto.current_price}</Link></td>
                                  {crypto.price_change_percentage_24hs > 0 ? (
                                      <td key={crypto.price_change_percentage_24hs} ><Link to={'/detail/' + crypto.index} className="home__price-up">+{crypto.price_change_percentage_24hs}%</Link></td>
                                      ) : (
                                      <td key={crypto.price_change_percentage_24hs} ><Link to={'/detail/' + crypto.index} className="home__price-down">{crypto.price_change_percentage_24hs}%</Link></td>
                                  )}
                                  <td key={crypto.market_cap + 'mk'}><Link to={'/detail/' + crypto.index}>${crypto.market_cap !== 0 ? parseInt(crypto.market_cap).toLocaleString() : '?'}</Link></td>
                                  <td key={crypto.circulating_supply + 'cs'}><Link to={'/detail/' + crypto.index}>{crypto.circulating_supply !== 0 ? crypto.circulating_supply.toLocaleString() : '?'} </Link></td>
                              </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </section>
        )
    } else {
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
                        {filteredCryptos.length > 0 ?
                                filteredCryptos.map((crypto, index) => (
                                    <tr key={index}>
                                        <td key={index}><Link to={'/detail/' + crypto.index}>{index+1}</Link></td>
                                        <td key={crypto.image}><Link to={'/detail/' + crypto.index}><img src={crypto.image} alt={crypto.name} className="home__crypto-icon" /> {crypto.name}</Link></td>
                                        <td key={crypto.current_price} ><Link to={'/detail/' + crypto.index}>${crypto.current_price}</Link></td>
                                        {crypto.price_change_percentage_24hs > 0 ? (
                                            <td key={crypto.price_change_percentage_24hs} ><Link to={'/detail/' + crypto.index} className="home__price-up">+{crypto.price_change_percentage_24hs}%</Link></td>
                                            ) : (
                                            <td key={crypto.price_change_percentage_24hs} ><Link to={'/detail/' + crypto.index} className="home__price-down">{crypto.price_change_percentage_24hs}%</Link></td>
                                        )}
                                        <td key={crypto.market_cap + 'mk'}><Link to={'/detail/' + crypto.index}>${crypto.market_cap !== 0 ? parseInt(crypto.market_cap).toLocaleString() : '?'}</Link></td>
                                        <td key={crypto.circulating_supply + 'cs'}><Link to={'/detail/' + crypto.index}>{crypto.circulating_supply !== 0 ? crypto.circulating_supply.toLocaleString() : '?'} </Link></td>
                                    </tr>
                            ))
                         : (
                            <tr><h1 style={{width: '100%', marginTop: '30px', cursor: 'pointer'}}>No crypto was found</h1></tr>
                        )}
                        {filteredCryptos.map((crypto, index) => (
                                <tr key={index}>
                                    <td key={index}><Link to={'/detail/' + crypto.index}>{index+1}</Link></td>
                                    <td key={crypto.image}><Link to={'/detail/' + crypto.index}><img src={crypto.image} alt={crypto.name} className="home__crypto-icon" /> {crypto.name}</Link></td>
                                    <td key={crypto.current_price} ><Link to={'/detail/' + crypto.index}>${crypto.current_price}</Link></td>
                                    {crypto.price_change_percentage_24hs > 0 ? (
                                        <td key={crypto.price_change_percentage_24hs} ><Link to={'/detail/' + crypto.index} className="home__price-up">+{crypto.price_change_percentage_24hs}%</Link></td>
                                        ) : (
                                        <td key={crypto.price_change_percentage_24hs} ><Link to={'/detail/' + crypto.index} className="home__price-down">{crypto.price_change_percentage_24hs}%</Link></td>
                                    )}
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
}

export default CryptoTable