import StyledRepositorio from "./styles"

const Repositorios = ({repo}) => {
    return (
        <StyledRepositorio>
            <h3>{repo.name}</h3>
            <h4>{repo.owner.login}</h4>

            <h5>{repo.created_at}</h5>
            <h5>Principal Linguagem: {repo.language}</h5>

            <p>{repo.description}</p>

            <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>

            <hr />
        </StyledRepositorio>
    )
}

export default Repositorios