import express from 'express'
import { addToNotes, deleteNoteById, getAllNotes, getNoteById, updateNote } from '../controllers/notes.controller.js'

const notesRouter = express.Router();

notesRouter.post('/notes', addToNotes);
notesRouter.get('/notes', getAllNotes);
notesRouter.get('/notes/:id', getNoteById);
notesRouter.put('/notes/:id', updateNote);
notesRouter.delete('/notes/:id', deleteNoteById);

export default notesRouter 