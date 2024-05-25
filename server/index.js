const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const PEXEL_KEY = process.env.PEXEL_API_KEY;


app.get("/pexels/photos", async (req, res) => {
  try {
    const query = "tiger";
    const response = await axios.get("https://api.pexels.com/v1/search", {
      params: {
        query,
        per_page: 7
      },
      headers: {
        Authorization: PEXEL_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error occurred while fetching photos from Pexels:", error);
    res.status(500).json({ error: "An error occurred while fetching photos from Pexels" });
  }
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
