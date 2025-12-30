import React, { useState } from "react";

const NotesInput = ({ notes, setNotes, user, setUser}) => {
  const [title, setNotesTitle] = useState();
  const [content, setNotesContent] = useState();
  
  const putNotes = async () => {
    var userId = user.user_id;
    try {
      const res = await fetch("http://localhost:8000/notes/notes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({userId, title, content }),
      });
      if (res.ok) {
        const result = await res.json()
        const newNote = result.note
        setNotesContent("");
        setNotesTitle("");
        setNotes([...notes, newNote]);
      }
    } catch (error) {
      console.error("Can't post notes", error);
    }
  };

  return (
    <div className="card">
      <h2>Notes</h2>
      <div className="notes-input">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setNotesTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => {
            setNotesContent(e.target.value);
          }}
        />
      </div>
      <button onClick={putNotes}>Save Note</button>
    </div>
  );
};

export default NotesInput;
