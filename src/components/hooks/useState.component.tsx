import { useState } from 'react'

function UseState() {
  const [count, setCount] = useState({ count: 0, theme: 'light' })

  const incrementCount = () => {
    setCount((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: prevState.theme === 'light' ? 'dark' : 'light'
      }
    })
  }
  return (
    <>
      <div
        className="useState-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px'
        }}>
        <div style={{ margin: '14px', fontSize: '25px' }}>{count.theme}</div>
        <div style={{ margin: '14px', fontSize: '25px' }}>{count.count}</div>
        <button onClick={incrementCount} style={{ padding: '10px' }}>
          increase
        </button>
      </div>
    </>
  )
}

export default UseState
