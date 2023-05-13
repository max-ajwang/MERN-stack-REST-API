import React from 'react'
import Wrapper from '../assets/wrappers/Blog'
import Article from './article/Article'

const Blog = () => {
  return (
    <Wrapper>
      <div className='gpt3__blog section__padding' id='blog'>
        <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
            <Article
              date='Sep 26, 2021'
              text='The 5 Parts of Any Business'
              intro='There are 5 parts to every business each of which flows into the next. 
                  When planning a new business or analyzing an existing venture, 
                  always begin with the five parts - they will help you discover any major issues or gaps quickly.'
            />
          </div>
          <div className='gpt3__blog-container_groupB'>
            <Article
              date='Sep 26, 2021'
              text='Elements of an effective discovery session'
            />
            <Article
              date='Sep 26, 2021'
              text='How to Write an Operations plan for your Business'
            />
            <Article
              date='Sep 26, 2021'
              text='How to Prepare an Income Statement'
            />
            <Article
              date='Sep 26, 2021'
              text='How to Prepare a Balance Sheet in 5 Steps'
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Blog
