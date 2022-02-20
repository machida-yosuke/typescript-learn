import * as React from 'react'
import { initialState, reducer } from './reducer'

const Component: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <>
      Count:{state.count}
      <button onClick={() => dispatch({ type: 'increment' })}></button>
      <button onClick={() => dispatch({ type: 'decrement' })}></button>
    </>
  )
}

export default Component
