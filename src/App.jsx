import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Hellow</h1>
      <h1>Sample Counter App</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h4>{count}</h4>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
