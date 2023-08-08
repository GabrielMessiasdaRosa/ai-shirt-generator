import * as dotenv from "dotenv";
import express from "express";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).send({
    message:
      "To see this microservice working, make a post request to api/v2/dalle/ with the following body: { prompt: 'The image is of a cat with a sunglasses.' }",
  });
});

router.route("/generate").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data.data[0].b64_json;

    res.status(200).send({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
});

export default router;
// A comic store logo, black yellow blue. geometric shapes.