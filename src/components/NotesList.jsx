import { useSelector, useDispatch } from "react-redux";
import { deleteNotes, editNotes } from "../store/features/notes/notesSlice";
import { useState } from "react";

const NotesList = () => {
  const notes = useSelector((state) => state.notes.notes) || [];
  const dispatch = useDispatch();
  const [editingNote, setEditingNote] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    content: ""
  });

  const handleEdit = (note) => {
    setEditingNote(note);
    setEditForm({
      title: note.title,
      content: note.content
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editNotes({
      id: editingNote.id,
      title: editForm.title,
      content: editForm.content
    }));
    setEditingNote(null);
  };

  const handleCancel = () => {
    setEditingNote(null);
  };

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          {editingNote && editingNote.id === note.id ? (
            <form onSubmit={handleSubmit} className="edit-form">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={editForm.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  name="content"
                  value={editForm.content}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <p>{note.date}</p>
              <div className="note-actions">
                <button onClick={() => dispatch(deleteNotes(note.id))} className="delete-btn">
                  Delete
                </button>
                <button onClick={() => handleEdit(note)} className="edit-btn">
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotesList;