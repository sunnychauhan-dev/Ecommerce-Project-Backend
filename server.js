import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js"
import cors from "cors";

//cofig env
dotenv.config();

//database config
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", authRoute);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes)

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the new project</h1>");
});
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
