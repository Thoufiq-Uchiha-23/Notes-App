import { useSelector, useDispatch } from "react-redux";
import { deleteNotes, editNotes } from "../store/features/notes/notesSlice";

const NotesList = () => {
  const notes = useSelector((state) => state.notes.notes) || [];
  console.log(notes)
  const dispatch = useDispatch();
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <p>{note.date}</p>
          <button onClick={() => dispatch(deleteNotes(note.id))}>Delete</button>
          <button onClick={() => dispatch(editNotes(note))}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
