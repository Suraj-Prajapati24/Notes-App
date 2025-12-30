import React, { useEffect, useState } from "react";

const NotesDisplay = ({notes, setNotes}) => {

  const deleteNote = async (key) => {
    try {
      const res = await fetch(`http://localhost:8000/notes/notes/${key}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const updatedNotes = notes.filter((ele) => ele.note_id != key);
        setNotes(updatedNotes);
      }
    } catch (error) {
      console.error("Can't post notes", error);
    }
  };

  return (
    <div className="notes-container card">
      {notes.map((note) => (
        <div className="note-row" key={note.note_id}>
          <div className="note-title">{note.title}</div>
          <div className="note-content" title={note.content}>
            {note.content}
          </div>
          <button className="note-delete" onClick={() => deleteNote(note.note_id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotesDisplay;
