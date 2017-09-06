import React from 'react';

const DeleteNote = ({onClick}) => {
  return (
    <span className="Control-heading" onClick={onClick}>delete note</span>
  )
}

export default DeleteNote;
