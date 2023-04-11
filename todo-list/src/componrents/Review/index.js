import "./index.css";
import React, { useState } from "react";

const Review = ({ title, onTitleChange }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    if (newTitle !== title) {
      onTitleChange(newTitle);
    }
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <input
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
        />
      ) : (
        <span onClick={() => setEditing(true)}>{title}</span>
      )}
    </div>
  );
};

export default Review;