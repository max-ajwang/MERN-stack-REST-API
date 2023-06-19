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
        background: var(--grey-100);
    }

    .blog-container-article-content p {
        font-family: var(--font-family);
        font-size: 15px;
        line-height: 25px;
        color: black;
        margin-bottom: auto;
        margin-top: 10px;
    }

    .blog-container-article-content h3 {
        font-family: var(--font-family);
        font-size: 30px;
        font-weight: 800;
        line-height: 30.30px;
        color: var(--primary-500);
        margin-bottom: 1rem;
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
            font-size: 30px;
            line-height: 30px;
        }

        .blog-container-article-content p {
            font-family: var(--font-family);
            font-size: 20px;
            line-height: 35px;
        }
    }
`

export default Wrapper