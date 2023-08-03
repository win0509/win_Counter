import React from 'react'

const Controller = ({handleSetCount}) => {
  return (
    <div className='controller'>
        <div>
            <button onClick={() => handleSetCount(-1)}>1</button>
            <button onClick={() => handleSetCount(-10)}>-10</button>
            <button onClick={() => handleSetCount(-100)}>-100</button>
            <button onClick={() => handleSetCount(+100)}>+100</button>
            <button onClick={() => handleSetCount(+10)}>+10</button>
            <button onClick={() => handleSetCount(+1)}>+1</button>
        </div>
    </div>
  )
}

export default Controller