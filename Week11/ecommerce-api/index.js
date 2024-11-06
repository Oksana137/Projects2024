import express from "express";
import "./models/associations.js";
import categoryRouter from "./routes/categoryRouter.js";
import orderRouter from "./routes/orderRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const port = 3000;

app.use(express.json());

// Category, Order, Product, and User routes
app.use("/categories", categoryRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/users", userRouter); // Add User routes

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
