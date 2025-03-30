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
    <div className="notes-list w-full flex justify-between items-center gap-2 p-10 flex-wrap">
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
            <div className="border border-white p-4 rounded bg-zinc-800 text-zinc-200">
              <h2 className="text-3xl font-bold py-2">{note.title}</h2>
              <p className="text-xl font-semibold py-2">{note.content}</p>
              <p className="text-sm">{note.date}</p>
              <div className="note-actions py-2 flex gap-2">
                <button onClick={() => dispatch(deleteNotes(note.id))} className="delete-btn bg-red-500 p-3 rounded">
                  Delete
                </button>
                <button onClick={() => handleEdit(note)} className="edit-btn bg-green-500 p-3 rounded">
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotesList;