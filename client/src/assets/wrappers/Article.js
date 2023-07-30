import styled from 'styled-components'

const Wrapper = styled.div`
    .blog-container-article {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        color: white;
        border-radius: var(--borderRadius);
        padding: 20px;
    }

    .blog-container-article-image {
        width: 95px;
        height: 75px;
        background: var(--dark-yellow);
        margin-right: 1rem;
    }

    .blog-container-article-image img {
        width: 100%;
        height: 100%;
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
        line-height: 1.5;
        color: white;
    }

    .blog-container-article-content h3 {
        font-family: var(--bodyFont);
        font-size: 1.225rem;
        font-weight: 800;
        line-height: 1.5;
        color: var(--white);
        cursor: pointer;
        margin-top: 1.5rem;
        margin-bottom: 0px;
    }

    .blog-intro {
        margin-top: -10px;
        margin-bottom: 1px;
    }

    .blog-container-article-content p:last-child {
        cursor: pointer;
        margin-bottom: 1rem;
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