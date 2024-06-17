const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
const productRoute =  require("./routes/product.routes.js");

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//routes
app.use("/api/products", productRoute);









app.get("/", (req, res) => {
  res.send("Hello World from me on port 3000");
});


mongoose
  .connect(
    "mongodb+srv://sriraghul0777:cNZdblN01an6c3PO@api.rcx93s6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=API"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
