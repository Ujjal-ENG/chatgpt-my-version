const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const configuration = new Configuration({
  organization: "org-C5ibwSkQWKMBHLhEAhBMNGQf",
  apiKey: "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",
  //apiKey: //process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 3000,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({
    data: response.data,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
