import styled from "styled-components";

const Container = styled.section `
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 3.2rem 0;

    img {
        width: 85px;
        height: 85px;
        margin-bottom: 2.4rem;
        transition: 0.5s ease-in-out;

        &:hover {
            scale: 1.1;
        }
    }
`

export default Container