import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import pg from "pg";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    const db = new Client({
      user: "postgres",
      host: "localhost",
      database: "Keeper",
      password: "sokmeak1376@",
      port: 5432,
    });

    const fetchInitialNotes = async () => {
      try {
        await db.connect(); // Connect to the database
        const response = await db.query("SELECT * FROM notes");
        setNotes(response.rows); // Store fetched notes
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        await db.end(); // Close the database connection
      }
    };

    fetchInitialNotes();
  }, []); // Empty dependency array to run once on mount
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
