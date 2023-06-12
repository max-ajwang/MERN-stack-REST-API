import styled from 'styled-components'

const Wrapper = styled.div`

{*/ New Breakpoints ===> (480px, 768px, 1024px, and 1280px)*/}


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
        padding: 1rem 1.5rem;
        height: 100%;
    }

    .blog-container-article-content p {
        font-family: var(--font-family);
        font-size: 16px;
        line-height: 25px;
        color: #fff;
    }

    .blog-container-article-content h3 {
        font-family: var(--font-family);
        font-size: 25.11px;
        font-weight: 800;
        line-height: 30.30px;
        color: #fff;
        margin-bottom: 1rem;
        cursor: pointer;
    }

    .blog-container-article-content p:last-child {
        cursor: pointer;
        margin-bottom: 1rem;
    }


    @media screen and (max-width: 550px) {
        .blog-container-article-content h3 {
            font-size: 18px;
            line-height: 25p;
        }
    }
`

export default Wrapper