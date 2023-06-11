const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

const app = express();
const PORT = process.env.PORT || 3001;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.options(
  "*",
  cors({
    origin: "https://drypokemon.netlify.app", // Replace with your desired origin
    optionsSuccessStatus: 200,
  })
);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
