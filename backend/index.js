import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
// import routes from "./Routes/Routes.js";
import routes from "./Routes/productsRoutes.js";
import router from "./Routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4030;
const URL="mongodb+srv://mudassar:Z4QUqPcMyD8iIYqV@cluster0.007tfez.mongodb.net/Ecommerece?retryWrites=true&w=majority";

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use('/product', routes); 
app.use('/user',router);

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Server Connect to MongoDB.");
  }).catch((error) => {
    console.log(`Somthing went wrong ${error}`);
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
