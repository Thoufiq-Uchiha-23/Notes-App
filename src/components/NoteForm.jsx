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
    <div className="p-7 bg-zinc-200 rounded-xl mb-5">
      <form onSubmit={handleSubmit} className="note-form flex flex-col w-[400px] text-zinc-700">
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-4 w-full focus:none placeholder:text-zinc-700 mb-5"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-4 placeholder:text-zinc-700 h-[100px]"
        />
        <button type="submit" className="bg-green-600 p-4 border mt-5 rounded-xl">Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
