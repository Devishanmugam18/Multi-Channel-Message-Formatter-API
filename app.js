import express from "express";
const app = express();

// Middleware
app.use(express.json());

// Routes
import formatterRoutes from "./routes/messageRoutes.js";
app.use("/", formatterRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
