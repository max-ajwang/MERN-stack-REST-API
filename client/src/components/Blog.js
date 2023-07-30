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
              imgUrl='https://www.incimages.com/uploaded_files/image/1024x576/engine_1725x810_21619.jpg'
              date='Sep 26, 2021'
              text='The 5 Parts of Any Business'
              intro='There are 5 parts to every business each of which flows into the next. 
                  When planning a new business or analyzing an existing venture, 
                  always begin with the five parts - they will help you discover any major issues or gaps quickly.'
            />
            <Article
              imgUrl='https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Elements-of-a-Product-Discovery-workshop-2.png'
              date='Sep 26, 2021'
              text='Elements of an effective discovery session'
              intro='There are 5 parts to every business each of which flows into the next. 
                  When planning a new business or analyzing an existing venture, 
                  always begin with the five parts - they will help you discover any major issues or gaps quickly.'
            />
            <Article
              imgUrl='https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Elements-of-a-Product-Discovery-workshop-2.png'
              date='Sep 26, 2021'
              text='How to Write an Operations plan for your Business'
              intro='There are 5 parts to every business each of which flows into the next. 
                  When planning a new business or analyzing an existing venture, 
                  always begin with the five parts - they will help you discover any major issues or gaps quickly.'
            />
            <Article
              imgUrl='https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Elements-of-a-Product-Discovery-workshop-2.png'
              date='Sep 26, 2021'
              text='How to Prepare an Income Statement'
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
