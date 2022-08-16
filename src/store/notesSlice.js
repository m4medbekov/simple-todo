import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload]
    },
    addNotes: (state, action) => {
      state.notes = action.payload
    },
  }
})

export const { addNote, addNotes } = notesSlice.actions

export default notesSlice.reducer