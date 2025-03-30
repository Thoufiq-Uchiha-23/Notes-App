// import './App.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment, decrement } from './store/counter/counterSlice'
import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'

function App() {
  return (
    <div className='w-full bg-black/90 min-h-screen text-white flex flex-col justify-center items-center'>
      
      <h1 className='text-5xl font-bold p-7'>Notes App by Thoufiq</h1>
      <NoteForm />
      <NotesList />
      
    </div>
  )
}

export default App
