import StyledButton from "./styles.js"

const Button = ({onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            Pesquisar repositório
        </StyledButton>
    )
}

export default Button