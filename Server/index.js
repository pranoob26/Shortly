const express = require("express");
const handleConnection = require("./connect");
const bodyParser = require("body-parser");
const urlRouter = require("./router/urlRouter");
const cors = require("cors");
const URL = require("./model/url");
const PORT = 8001;
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
handleConnection("mongodb://localhost:27017/url-shortener")
  .then(() => {
    console.log("MongoDB connection Successfull...");
  })
  .catch((err) => {
    console.log("Caught an error as follows...\n" + err);
  });
app.use("/url", urlRouter);
app.get("/:shortid", async (req, res) => {
  const shortId = req.params.shortid;
  const result = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        clickCount: { timestamp: Date.now() },
      },
    }
  );
  console.log(result.extendedURL);
  res.redirect(result.extendedURL);
});
app.listen(PORT, () => {
  console.log(`Port: ${PORT} is listening... `);
});
