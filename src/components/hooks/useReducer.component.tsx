import { useReducer, useState } from 'react'

interface StateProp {
  counter: number
  inputValues: string[]
}

type ActionProp =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'addTask'; inputValue: string }

const reducer = (state: StateProp, action: ActionProp) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'addTask':
      return {
        ...state,
        inputValues: [...state.inputValues, action.inputValue]
      }

    default:
      return state
  }
}

function UserReducer2() {
  const [{ counter, inputValues }, dispatch] = useReducer(reducer, {
    counter: 0,
    inputValues: ['']
  })

  const [inputValue, setInputValue] = useState('')

  const handleSubmitInput = () => {
    dispatch({ type: 'addTask', inputValue })
    setInputValue('')
  }

  return (
    <>
      <div
        className="reducer-container"
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '15px'
        }}>
        <h1>{counter}</h1>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </button>

        <input
          onKeyDown={(e) => e.key === 'Enter' && handleSubmitInput()}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleSubmitInput}>Add</button>

        <div className="inputItems-container">
          {inputValues.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </div>
      </div>
    </>
  )
}

export default UserReducer2
