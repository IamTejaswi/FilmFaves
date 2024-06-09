import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(
    JSON.parse(window.localStorage.getItem("notes"))
  );
  const handleChange = (e) => {
    setNotes(e.target.value);
    window.localStorage.setItem("notes", JSON.stringify(e.target.value));
  };
  return (
    <div style={{ background: "yellow", padding: "20px" }}>
      <h1>Notes</h1>
      <textarea
        value={notes}
        onChange={handleChange}
        style={{ width: "100%", height: "300px" }}
      ></textarea>
    </div>
  );
}
