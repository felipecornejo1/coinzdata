// CryptoTable is the table displayed in the home page, listing all cryptos and showcasing some of their data.
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/index'
import Pagination from '@mui/material/Pagination'

function CryptoTable({ allCryptos, tableTitles, searchQuery }) {
  // Create a page state to handle pagination and store some variables
  const [page, setPage] = useState(1)
  let cryptosPerPage = 50
  let numberOfPages = allCryptos.length / cryptosPerPage
  if (numberOfPages % 1 !== 0) numberOfPages = parseInt(numberOfPages + 1)

  // If the search box in the home page received an input, redefine allCryptos to only contain those that match with the search input.
  if (searchQuery) {
    allCryptos = allCryptos.filter((crypto) => {
      return (
        crypto.name.toLowerCase().includes(searchQuery) ||
        crypto.symbol.toLowerCase().includes(searchQuery)
      )
    })
  }

  return (
    <section id='home__crypto-table'>
      {searchQuery && allCryptos.length === 0 ? (
        <h1 className='home__no-cryptos-found'>
          There are no cryptos related to "{searchQuery}"
        </h1>
      ) : allCryptos.length === 0 ? (
        <Loader />
      ) : (
        <div className='container w-100 table-responsive '>
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                {tableTitles.map((title) => (
                  <td key={title}>{title}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {allCryptos
                .slice(
                  (page - 1) * cryptosPerPage,
                  (page - 1) * cryptosPerPage + cryptosPerPage
                )
                .map((crypto) => (
                  <tr key={crypto.rank}>
                    <td key={crypto.rank}>
                      <Link to={'/detail/' + crypto.index}>{crypto.rank}</Link>
                    </td>
                    <td key={crypto.image}>
                      <Link to={'/detail/' + crypto.index}>
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className='home__crypto-icon'
                        />{' '}
                        {crypto.name}{' '}
                        <span className='home__crypto-symbol'>
                          {crypto.symbol.toUpperCase()}
                        </span>
                      </Link>
                    </td>
                    <td key={crypto.current_price}>
                      <Link to={'/detail/' + crypto.index}>
                        ${crypto.current_price}
                      </Link>
                    </td>
                    {crypto.price_change_percentage_24hs > 0 ? (
                      <td key={crypto.price_change_percentage_24hs}>
                        <Link
                          to={'/detail/' + crypto.index}
                          className='home__price-up'
                        >
                          +{crypto.price_change_percentage_24hs}%
                        </Link>
                      </td>
                    ) : (
                      <td key={crypto.price_change_percentage_24hs}>
                        <Link
                          to={'/detail/' + crypto.index}
                          className='home__price-down'
                        >
                          {crypto.price_change_percentage_24hs}%
                        </Link>
                      </td>
                    )}
                    <td key={crypto.market_cap + 'mk'}>
                      <Link to={'/detail/' + crypto.index}>
                        {crypto.market_cap !== 0
                          ? '$' + parseInt(crypto.market_cap).toLocaleString()
                          : '?'}
                      </Link>
                    </td>
                    <td key={crypto.circulating_supply + 'cs'}>
                      <Link to={'/detail/' + crypto.index}>
                        {crypto.circulating_supply !== 0
                          ? `${crypto.circulating_supply.toLocaleString()} ${crypto.symbol.toUpperCase()}`
                          : '?'}{' '}
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: 30,
            }}
            count={numberOfPages}
            onChange={(_, value) => {
              setPage(value)
              window.scroll(0, 200)
            }}
          />
        </div>
      )}
    </section>
  )
}

export default CryptoTable
