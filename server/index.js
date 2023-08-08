import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import chatRoutes from "./routes/chat-gpt.routes.js";
import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(
  express.json({
    limit: "50mb",
  })
);


app.use("/api/v2/dalle", dalleRoutes);
app.use("/api/v2/chat", chatRoutes);
app.use("/gmr", express.static("public"));

app.listen(8080, () => {
  console.log(`Server listening on port 8080`);
});
