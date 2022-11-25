import StyledInput from "./styles"

const Input = ({value, onChange}) => {
    return (
        <StyledInput>
            <input value={value} onChange={onChange}/>
        </StyledInput>
    )
}

export default Input