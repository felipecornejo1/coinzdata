import React, { useState } from 'react'
import { State } from '../../Context'
import Alert from '@mui/material/Alert'

export default function AddToWatchlist({ id }) {
  const { watchlist, setWatchlist } = State()
  const [warning, setWarning] = useState(false)
  const [added, setAdded] = useState(watchlist.includes(id))

  return (
    <>
      <div
        className='add-to-watchlist'
        onClick={() => {
          if (watchlist.includes(id)) {
            let newWatchlist = watchlist.filter((item) => {
              return parseInt(item) !== parseInt(id)
            })
            setWatchlist(newWatchlist)
            setAdded(false)
          } else {
            let newWatchlist = watchlist
            newWatchlist.push(id)
            setWarning(true)
            setWatchlist(newWatchlist)
            setAdded(true)
          }
        }}
      >
        {added ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </div>
      {warning ? (
        <Alert
          style={{
            position: 'fixed',
            top: '50px',
            left: '50px',
            cursor: 'pointer',
          }}
          onClick={(e) => {
            e.target.parentElement.style.display = 'none'
          }}
          severity='error'
        >
          This feature is not available yet. Click here to dismiss
        </Alert>
      ) : (
        ''
      )}
    </>
  )
}
