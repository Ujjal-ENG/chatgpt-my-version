const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

const configuration = new Configuration({
  organization: "org-C5ibwSkQWKMBHLhEAhBMNGQf",
  apiKey: "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",
  //apiKey: //process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });

  res.json({
    message: response.data.choices[0].text,
  });
});

app.get("/", (req, res) => {
  res.send("Hello Ujjal");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
