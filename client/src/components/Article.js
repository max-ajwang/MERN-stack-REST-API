import React from 'react';
import Wrapper from '../assets/wrappers/Article';

const Article = ({ imgUrl, date, text, intro }) => (
  <Wrapper>
    <div className="blog-container-article">
      <div className="blog-container-article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="blog-container-article-content">
        <p>{date}</p>
        <h3>{text}</h3>
        <p className='blog-intro'>{intro}</p>
        <p>Read Full Article</p>
      </div>
    </div>
  </Wrapper>
);

export default Article;
