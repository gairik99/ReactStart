import { useReducer } from 'react'
import { reducerCount } from './reducers/countReducers';
import './App.css'

function App() {
  let initialState = {
    count: 0,
  }


  // const reducerCount = (state, action) => {
  //   switch (action.type) {
  //     case 'INC':
  //       return {
  //         ...state,
  //         count: state.count + 1
  //       }
  //     case 'DEC':
  //       return {
  //         ...state,
  //         count: state.count - 1
  //       }
  //     default:
  //       return state
  //   }
  // }

  const decHelper = () => dispatch({ type: 'DEC' });
  const [state, dispatch] = useReducer(reducerCount, initialState)

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'INC' })} >INC</button>
      <button onClick={decHelper}>Dec</button>
    </>
  )
}

export default App
