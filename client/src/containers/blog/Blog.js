import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="The 5 Parts of Any Business" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Elements of an effective discovery session" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="How to Write an Operations plan for your Business" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="How to Prepare an Income Statement" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="How to Prepare a Balance Sheet in 5 Steps" />
      </div>
    </div>
  </div>
);

export default Blog;
