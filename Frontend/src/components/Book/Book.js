import React, { useState } from "react";
import { Button, IconButton, Tooltip } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const SERVER = process.env.NODE_ENV === 'development' ? 'https://book-store-wdrs.onrender.com/books/' : 'https://talkie-3.onrender.com/books/';
  const deleteHandler = async () => {
    try {
      await axios.delete(`SERVER/${_id}`);
      history("/books");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overlay"></div>
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <div className="button-group">
        <Tooltip title="Update">
          <IconButton
            color="primary"
            component={Link}
            to={`/books/${_id}`}
            sx={{ mt: "auto" }}
          >
            <UpdateIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            color="error"
            onClick={deleteHandler}
            sx={{ mt: "auto" }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Book;
