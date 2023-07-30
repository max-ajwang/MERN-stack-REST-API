import React from 'react';
import Wrapper from '../assets/wrappers/Article';

const Article = ({ imgUrl, date, text, intro }) => (
  <Wrapper>
    <div className="blog-container-article">
      <div className="blog-container-article-image">
      
      </div>
      <div className="blog-container-article-content">
        <h3>{text}</h3>
        <p>{date}</p>
        <p className='blog-intro'>{intro}</p>
        <p><a href='#FullBlog'>Read Full Article</a></p>
      </div>
    </div>
  </Wrapper>
);

export default Article;
