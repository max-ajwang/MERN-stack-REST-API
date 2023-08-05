import React from 'react'
import Wrapper from '../assets/wrappers/Blog'
import Article from './Article'

const Blog = () => {
  return (
    <Wrapper>
      <div className='container blog section__padding'>
        <div className='blog-heading'>
          <h5>Latest Posts</h5>
        </div>
        <div className='blog-container'>
          <div className='blog-container-articles'>
            <Article
              date='Sep 26, 2021'
              text='The 5 Parts of Any Business'
              intro='There are 5 parts to every business each of which flows into the next. 
                  When planning a new business or analyzing an existing venture, 
                  always begin with the five parts - they will help you discover any major issues or gaps quickly.'
            />
            <Article
              date='Sep 26, 2021'
              text='Elements of an effective discovery session'
              intro='There are 5 parts to every business each of which flows into the next. 
                  When planning a new business or analyzing an existing venture, 
                  always begin with the five parts - they will help you discover any major issues or gaps quickly.'
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Blog
