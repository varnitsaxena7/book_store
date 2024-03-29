import { Box, Typography } from "@mui/material";
import React from "react";
import LibraryImage from "./library.jpg";

const About = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src={LibraryImage} alt="Library" style={{ maxWidth: "100%", marginBottom: "20px", borderRadius: "8px" }} /> {/* Adding an image */}
        <Typography style={{ fontFamily: "fantasy", fontSize: "36px", textAlign: "center", marginBottom: "10px" }}>
          Welcome to Our Enchanted Library
        </Typography>
        <Typography style={{ fontFamily: "fantasy", fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>
          Embark on a Journey Through the Pages of Imagination
        </Typography>
        <Typography style={{ fontSize: "18px", textAlign: "center", marginBottom: "15px" }}>
          Step into a world where stories come to life, where every book is a gateway to endless possibilities.
        </Typography>
        <Typography style={{ fontSize: "18px", textAlign: "center", marginBottom: "15px" }}>
          Lose yourself in the magic of words, where dreams unfold, and adventures await at every turn of the page.
        </Typography>
        <Typography style={{ fontSize: "18px", textAlign: "center", marginBottom: "15px" }}>
          Our library is more than just a collection of books; it's a sanctuary for the mind, a refuge for the soul.
        </Typography> 
      </Box>
    </div>
  );
};

export default About;
