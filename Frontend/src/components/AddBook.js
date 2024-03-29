import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!inputs.name || !inputs.author || !inputs.description || !inputs.price || !inputs.image) {
        setError("All fields are required.");
        return;
      }

      await axios.post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      });
      
      history("/books");
    } catch (error) {
      console.error("Error adding book:", error);
      setError("An error occurred while adding the book. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        className="form-container"
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth={700}
        mx="auto"
        my={10}
        p={5}
        boxShadow={3}
        borderRadius={8}
      >
        <Typography variant="h4" gutterBottom>
          Add a New Book
        </Typography>
        {error && (
          <Typography color="error" variant="body1" gutterBottom>
            {error}
          </Typography>
        )}
        <TextField
          label="Name"
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <TextField
          label="Author"
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <TextField
          label="Description"
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <TextField
          label="Price"
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <TextField
          label="Image URL"
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
          label="Available"
        />
        <Button variant="contained" type="submit" color="primary">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
