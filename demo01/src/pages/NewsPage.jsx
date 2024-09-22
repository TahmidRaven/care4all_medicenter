import React, { useEffect, useState } from 'react';
import '../styles/NewsPage.css';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('/api/news')
            .then(response => response.json())
            .then(data => setNews(data.articles))
            .catch(err => setError('Error fetching news'));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredNews = news.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="news-container">
            <h1 className="news-title">Health News Updates</h1>
            <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="news-search-input"
            />
            {error && <p className="news-error">{error}</p>}
            <div className="news-articles">
                {filteredNews.map((article, index) => (
                    <a
                        key={index}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="news-article-link"
                    >
                        <div className="news-article">
                            <img src={article.image} alt={article.title} className="news-image" />
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
