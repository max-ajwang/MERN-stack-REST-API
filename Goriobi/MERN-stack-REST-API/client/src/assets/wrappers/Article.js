import styled from 'styled-components'

const Wrapper = styled.div`
    .blog-container-article {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        color: white;
        border-radius: var(--borderRadius);
    }

    .blog-container-article-image {
        width: 95px;
        height: 75px;
        background: var(--dark-yellow);
        margin-right: 1rem;
    }

    .blog-container-article-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .blog-container-article-content p {
        font-family: var(--bodyFont);
        font-size: 15px;
        color: white;
        margin-top: 0rem;
        margin-bottom: .15rem;
    }

    .blog-container-article-content h3 {
        font-family: var(--bodyFont);
        font-size: 1.225rem;
        font-weight: 600;
        color: var(--white);
        cursor: pointer;
        margin-bottom: 0px;
    }

    .blog-intro {
        line-height: 1.5;
    }

    .blog-container-article-content a {
        cursor: pointer;
        margin-bottom: 1rem;
        text-decoration: none;
        color: var(--dark-yellow);
    }

    
    @media screen and (max-width: 1280px) {
        
    } 

    @media screen and (max-width: 1024px) {
        
    }    
    
    @media screen and (max-width: 768px) {
        
    }

    @media screen and (max-width: 480px) {
        .blog-container-article-content h3 {
            font-size: 1.325rem;
            line-height: 1.5;
            letter-spacing: -.01em;
        }

        .blog-container-article-content p {
            font-family: var(--bodyFont);
            font-size: .875rem;
            line-height: 1.5715;
            letter-spacing: -.01em;
        }
    }
`

export default Wrapper