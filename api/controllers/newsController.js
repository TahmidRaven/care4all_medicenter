import axios from 'axios';

export const getNews = async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?category=health', {
      params: {
        q: 'health',
        apiKey: process.env.NEWS_API_KEY,
        pageSize: 10,
        language: 'en'
      }
    });

    const articles = response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.urlToImage
    }));

    res.json({ articles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching news' });
  }
};



