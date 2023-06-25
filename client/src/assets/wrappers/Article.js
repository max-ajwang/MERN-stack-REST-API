import styled from 'styled-components'

const Wrapper = styled.div`
    .blog-container-article {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: var(--color-footer);
    }

    .blog-container-article-image {
        width: 100%;
        height: 100%;
        background: var(--color-bg);
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
        font-family: var(--font-family);
        font-size: 15px;
        line-height: 25px;
        color: black;
        margin-bottom: auto;
    }

    .blog-container-article-content h3 {
        font-family: var(--font-family);
        font-size: 30px;
        font-weight: 800;
        line-height: 30.30px;
        color: var(--primary-500);
        cursor: pointer;
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
            font-family: var(--font-family);
            font-size: .875rem;
            line-height: 1.5715;
            letter-spacing: -.01em;
        }
    }
`

export default Wrapper