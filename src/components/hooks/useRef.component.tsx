import { useEffect, useRef, useState } from 'react'

function UseRef() {
  const [count, setCount] = useState(0)

  const numberRef = useRef(0)

  const buttonRef = useRef<HTMLButtonElement>()

  const oldCountRef = useRef<number>()

  useEffect(() => {
    numberRef.current = Math.random()
  })

  // useEffect(() => {
  //   console.log(buttonRef.current?.click())
  // }, [])

  useEffect(() => {
    oldCountRef.current = count
  }, [count])

  console.log('render')

  return (
    <>
      <div
        className="ref-container"
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '15px'
        }}>
        <h1>O numero aleatorio eh: {numberRef.current}</h1>
        <h1>O contador eh: {count}</h1>
        <h2>O contador anterior era: {oldCountRef.current}</h2>
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          ref={buttonRef as any}>
          Increment
        </button>
      </div>
    </>
  )
}

export default UseRef
