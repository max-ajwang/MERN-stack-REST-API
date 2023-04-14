import React from 'react'

const BlogCard = (props) => {
  const {img, title, date, author} = props.blog;
  return (
    <article className="blog">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{date}</p>
    </article>
  );
}

export default BlogCard
