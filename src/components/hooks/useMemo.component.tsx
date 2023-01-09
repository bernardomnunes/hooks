import { useState, useMemo } from 'react'

function UseMemo() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')

  useMemo(() => slowFunction(number), [number])
  return (
    <>
      <div
        className="memo-container"
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '15px'
        }}>
        <p>{number}</p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>text: {text}</p>
      </div>
    </>
  )
}

const slowFunction = (value: number) => {
  console.log('rendre')
  for (let i = 0; i <= 10000; i++) {}
  return value * 2
}

export default UseMemo
