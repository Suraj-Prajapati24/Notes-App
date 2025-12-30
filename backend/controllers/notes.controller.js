import client from "../dbConnection.js";

export const addToNotes = async (req, res) => {
  var title = req.body.title;
  var content = req.body.content;
  var user_id = req.body.userId;
  if (!title || !content) {
    return res.status(400).send({
      success: false,
      message: "Missing Fields",
    });
  }
  const putResult = await client.query(
    `INSERT INTO notes (user_id, title, content) VALUES (${parseInt(
      user_id
    )},'${title}', '${content}') returning *`
  );

  return res.status(200).send({
    success: true,
    message: "Successfully Added",
    note: putResult.rows[0],
  });
};

export const getAllNotes = async (req, res) => {
  var user_id = req.query.userId;
  const notes = await client.query(
    `SELECT * FROM notes WHERE user_id = ${user_id}`
  );

  return res.status(200).send({
    success: true,
    message: "note added successfully!",
    result: notes.rows,
  });
};

export const getNoteById = async (req, res) => {
  var user_id = req.query.userId;
  const putResult = await client.query(
    `SELECT note_id, title, content FROM notes WHERE note_id = ${req.query.id} AND user_id = ${user_id}`
  );
  const note = putResult.rows;
  if (!note) {
    return res.status(404).send({
      success: false,
      message: "Note not found",
    });
  }
  return res.status(200).send({
    success: true,
    result: note,
  });
};

export const updateNote = async (req, res) => {
  try {
    if (req.body["title"]) {
      const putResult = await client.query(
        `UPDATE notes SET title = '${req.body["title"]}' WHERE user_id = ${user_id} AND note_id = ${req.params.id}`
      );
    }
    if (req.body["content"]) {
      const putResult = await client.query(
        `UPDATE notes SET content = '${req.body["content"]}' WHERE user_id = ${user_id} AND note_id = ${req.params.id}`
      );
    }
    return res.status(200).send({
      success: true,
      result: "Successfully Added",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: `error while processing: ${error}`,
    });
  }
};

export const deleteNoteById = async (req, res) => {
  try {
    const putResult = await client.query(
      `DELETE FROM notes WHERE note_id = ${req.params.id}`
    );
    return res.status(200).send({
      success: true,
      result: "Successfully Deleted",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: `error while processing: ${error}`,
    });
  }
};
