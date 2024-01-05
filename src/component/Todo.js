import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
function Todo() {
  const [note, setNote] = useState([]);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setNote([...note, text]);
    setText("");
  };
  const handleDelete = (res) =>{
    const arr = note.filter((item)=> item !== res)
    setNote(arr)
  }
  return (
    <div className="d-flex justify-content-center align-items-center  flex-column ">
      <div>
        <form>
          <h1>To Do List</h1>
          <input
            className="form-control form-control-lg my-4 "
            type="text"
            placeholder="Enter Note"
            aria-label=".form-control-lg example"
            minLength="5"
            onChange={handleChange}
            value={text}
          />
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
      <div className="card my-3" style={{minWidth: "18rem"}}>
        <div className="card-header">List</div>
        <ul className="list-group list-group-flush">
          {note.length > 0 ? (
            note.map((res, key) => {
              return (
                <li className="list-group-item d-flex justify-content-between" key={key}>
                  {res} 
                  <button type="button" className="btn btn-outline-danger" onClick={() =>handleDelete(res)}><FaTrashAlt /></button>
                </li>
              );
            })
          ) : (
            <strong>No items to display</strong>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
