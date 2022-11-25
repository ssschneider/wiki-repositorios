import styled from "styled-components";

const StyledRepositorio = styled.div`
    width: fit-content;
    padding: 0 2.4rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    
    h3 {
        font-size: 3.2rem;
        margin-bottom: .8rem;
    }

    h4 {
        font-size: 1.6rem;
        margin-bottom: .8rem;
        color: #f5f5f590;
        font-weight: lighter;
    }

    h5 {
        font-size: 1.6rem;
        font-weight: bold;
    }

    p {
        font-size: 1.2rem;
        margin: 1.6rem 0 .8rem;
    }

    a {
        text-decoration: none;
        background-color: #f0f;
        padding: .8rem 1.6rem;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 24px;
    }

    hr {
        width: 100%;
        margin: 1.6rem 0;
        color: #fafafa60;
    }
`

export default StyledRepositorio