import * as dotenv from "dotenv";
import express from "express";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(config);

router.route("/").post(async (req, res) => {
  try {
    const prompt =
      "Now you are Link, from the game zelda. Tell me about yourself and how you defeat Ganon tell me a long version of history.";

    const response = await openai.createCompletion({
      prompt,
    });

    const history = response.data.choices[0].text;

    res.status(200).send({ history: history });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

export default router;
