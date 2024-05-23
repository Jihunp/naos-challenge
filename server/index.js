const express = require('express')
const cors = require('cors')
// const axios = require('axios')

require('dotenv').config()

const app = express();


app.use("/", (req, res) => {
  res.send("server is running");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
})