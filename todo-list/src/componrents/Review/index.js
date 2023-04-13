import "./index.css";
import React, { useState, useEffect } from "react";

const Review = ({ title, onTitleChange }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  useEffect(() => {setNewTitle(title);}, [title]);

  const handleTitleChange = (id) => {
    setNewTitle(id.target.value);
  };

  const _handleTitleBlur = () => {
    if (newTitle !== title) {
      onTitleChange(newTitle);
    }
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <input
          className="review"
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          onBlur={_handleTitleBlur}
        />
      ) : (
        <span className="review" onClick={() => setEditing(true)}>{title}</span>
      )}
    </div>
  );
};

export default Review;