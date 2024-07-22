const shortid = require("shortid");
const URL = require("../model/url");
async function handleUrlShortening(req, res) {
  if (!req.body.extendedURL) return res.status(400);
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    extendedURL: req.body.extendedURL,
    clickCount: [],
  });
  res.json({ id: shortID });
}

module.exports = {
  handleUrlShortening,
};
