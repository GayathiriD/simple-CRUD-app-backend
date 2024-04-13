const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const ProductRoute = require("./routes/product.route.js");
//mxiddleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/api/products", ProductRoute);
app.get("/", (req, res) => {
  res.send("Hello from API Node Server Updated !");
});

mongoose
  .connect(
    "mongodb+srv://admin:Cloud4796@cluster0.3zxgysg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB...");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB...");
  });
