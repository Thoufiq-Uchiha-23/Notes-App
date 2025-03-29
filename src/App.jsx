import './App.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from './store/counter/counterSlice'
import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'

function App() {
  return (
    <div>
      <h1>Notes App by Thoufiq</h1>
      <NoteForm />
      <NotesList />
    </div>
  )
}

export default App
