const router = require('express').Router();
const axios = require('axios');

router.get('/api/search', async (req, res) => {
  const searchArray = [];

  try {
    const { searchQuery } = req.query;
    const { data } = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=9dHkamrf5YHILykCfby1TJcTTWsKa3tV&limit=5`
    );
    data.data.map((meme) => {
      searchArray.push({
        title: meme.title,
        id: meme.id,
        url: meme.url,
        embed_url: meme.embed_url
      });
    });
    res.json(searchArray);
    // res.json(data.data);
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

module.exports = router;
