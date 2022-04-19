import React, { useState, useEffect } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articles = () => {
    //STATE & VARIABLES
    const [articles, setArticles] = useState(null);

    //useEFFECT
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setArticles(data);
        }, 500)
    }, []);
    return(
        <div className="articles">
            <h2>Articles</h2>

            <SkeletonArticle />
            {articles && articles.map((article) => (
                <div className='article' key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            ))}

            {!articles && [1,2,3,4,5].map((item) => (
                <SkeletonArticle key={item} />
            ))}
        </div>
    );
}

export default Articles;