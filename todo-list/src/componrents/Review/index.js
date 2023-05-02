// import "./index.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
        <Edit onClick={() => setEditing(true)}>{title}</Edit>
      )}
    </div>
  );
};

const Edit = styled.span`
  color: rgb(131, 131, 131);
  font-size: 8px;
`;

export default Review;