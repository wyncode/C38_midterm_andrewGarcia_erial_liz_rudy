const router = require('express').Router();
const axios = require('axios');

router.get('/api/search', async (req, res) => {
  const searchArray = [];

  try {
    const { searchQuery } = req.query;
    const { data } = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${process.env.GIPHY_API_KEY}&limit=50`
    );
    data.data.map((meme) => {
      searchArray.push({
        title: meme.title,
        id: meme.id,
        url: meme.url,
        embed_url: meme.images.original.url
      });
    });
    res.json(searchArray);
    // res.json(data.data);
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

router.get('/api/single-gif/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(
      `http://api.giphy.com/v1/gifs/${id}?api_key=${process.env.GIPHY_API_KEY}`
    );
    if (!data.data) {
      res.json({ error: 'No gifs found' });
    }

    res.json({
      title: data.data.title,
      id: data.data.id,
      url: data.data.url,
      embed_url: data.data.images.original.url,
      type: data.data.type,
      height: data.data.images.original.height,
      width: data.data.images.original.width 
    });
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

router.get('/api/trending', async (req, res) => {
  const trendingArray = [];

  try {
    const { data } = await axios.get(
      `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=20`
      );
      data.data.map((meme) => {
        trendingArray.push({
          title: meme.title,
          id: meme.id,
          url: meme.url,
          img_url: meme.images.original.url
        });
      });
      console.log(trendingArray);
      res.json(trendingArray);
      // res.json(data);
      // res.json(data.data);
    } catch (error) {
      res.json({ error: error.toString() });
    }
  });

router.get('/api/random', async (req, res) => {
  const randomArray = [];

  try {
    const { data } = await axios.get(
      `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`
      );
      data.data.map((meme) => {
        randomArray.push({
          title: meme.title,
          id: meme.id,
          url: meme.url,
          img_url: meme.images.original.url
        });
      });
      res.json(randomArray);

    } catch (error) {
      res.json({ error: error.toString() });
    }
  });
module.exports = router;
