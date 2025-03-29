import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../store/features/notes/notesSlice";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
//   console.log(new Date().toISOString().split("T")[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNotes({
        id: Date.now(),
        title,
        content,
        date: new Date().toISOString().split("T")[0],
      })
    );
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
