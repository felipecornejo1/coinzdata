import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { State } from '../../Context'
import { CryptoChart, AddToWatchlist, Loader } from '../../components/index'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

function Detail() {
  const cryptoID = useParams().id
  const { allCryptos } = State()
  let crypto = allCryptos.filter((crypto) => {
    return parseInt(crypto.index) === parseInt(cryptoID)
  })[0]

  return (
    <main id='detail'>
      {crypto ? (
        <div className='detail__container'>
          <Link to='/'>
            <button className='detail__go-back'>Go Back</button>
          </Link>
          <div className='detail__top'>
            <div className='detail__top__title'>
              <img
                src={crypto.image}
                alt={crypto.name}
                id='detail__crypto-image'
              />
              <div className='detail__crypto-name-ctn'>
                <h1 className='detail__crypto-name'>
                  {crypto.name}{' '}
                  <span className='detail__crypto-symbol'>
                    {crypto.symbol.toUpperCase()}
                  </span>
                </h1>
                <div className='detail__crypto-name-ctn__bottom'>
                  <p className='detail__crypto-rank'>Rank #{crypto.rank}</p>
                  <AddToWatchlist id={cryptoID} />
                </div>
              </div>
            </div>
            <div className='detail__price-info'>
              <h2 className='detail__crypto-price'>${crypto.current_price}</h2>
              {crypto.price_change_percentage_24hs > 0 ? (
                <h2 className='detail__crypto-change price-up'>
                  <ArrowUpwardIcon />
                  {crypto.price_change_percentage_24hs}%
                </h2>
              ) : (
                <h2 className='detail__crypto-change price-down'>
                  <ArrowDownwardIcon />
                  {crypto.price_change_percentage_24hs}%
                </h2>
              )}
            </div>
          </div>
          <div className='detail__crypto-data'>
            <div className='detail__data-set'>
              <p className='detail__data-set__label'>Market Cap</p>
              <p>${crypto.market_cap}</p>
            </div>
            <div className='detail__data-set'>
              <p className='detail__data-set__label'>Circulating Supply</p>
              <p>
                {crypto.circulating_supply} {crypto.symbol.toUpperCase()}
              </p>
            </div>
          </div>
          <CryptoChart
            style={{
              width: '70vw',
            }}
            crypto={crypto}
          />
        </div>
      ) : (
        <Loader />
      )}
      {/*  */}
    </main>
  )
}

export default Detail
