import React from "react";
import { Button, Typography, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", backgroundColor: "#f5f5f5" }}>
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" p={4} borderRadius={8} boxShadow={3}>
        <Typography variant="h2" gutterBottom style={{ marginBottom: "20px", fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: "bold", color: "#333" }}>
          Welcome to Our Enchanted Bookstore
        </Typography>
        <Typography variant="body1" gutterBottom style={{ marginBottom: "30px", fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#555" }}>
          Embark on a magical journey through the pages of imagination and discovery.
        </Typography>
        <Button
          component={Link}
          to="/books"
          variant="contained"
          style={{ backgroundColor: "#FF5733", color: "#fff", fontWeight: "bold", textTransform: "uppercase", padding: "12px 24px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", cursor: "pointer", transition: "background-color 0.3s ease-in-out" }}
          sx={{ "&:hover": { backgroundColor: "#FF814E" } }}
        >
          Explore Our Collection
        </Button>
        <Paper elevation={3} style={{ marginTop: "40px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", maxWidth: "400px" }}>
          <Typography variant="h5" style={{ marginBottom: "10px", fontFamily: "Georgia, serif", fontWeight: "bold", color: "#333" }}>
            Featured Book
          </Typography>
          <Box display="flex" alignItems="center">
            <img src="https://via.placeholder.com/100" alt="Book Cover" style={{ marginRight: "20px", borderRadius: "8px" }} />
            <div>
              <Typography variant="subtitle1" style={{ fontFamily: "Arial, sans-serif", color: "#555" }}>
                Title: The Enchanted Forest
              </Typography>
              <Typography variant="subtitle1" style={{ fontFamily: "Arial, sans-serif", color: "#555" }}>
                Author: John Doe
              </Typography>
              <Button
                component={Link}
                to="/books"
                variant="outlined"
                style={{ color: "#FF5733", fontWeight: "bold", textTransform: "uppercase", padding: "6px 12px", borderRadius: "5px", marginTop: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", cursor: "pointer" }}
              >
                View Details
              </Button>
            </div>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Home;
