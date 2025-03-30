import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNotes: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNotes: (state, action) => {
      const { id, title, content } = action.payload;
      const noteIndex = state.notes.findIndex((note) => note.id === id);
      if (noteIndex !== -1) {
        state.notes[noteIndex] = {
          ...state.notes[noteIndex],
          title,
          content
        };
      }
    },
  },
});

export const { addNotes, deleteNotes, editNotes } = notesSlice.actions;
export default notesSlice.reducer;