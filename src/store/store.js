import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'
import notesSlice from './features/notes/notesSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    notes: notesSlice,
  },
})