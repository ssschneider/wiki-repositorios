import { useState } from "react";
import Button from "../components/button/button";
import Input from "../components/input/input";
import Repositorios from "../components/repositorios/repositorios";
import api from "../services/api";
import Container from "./styles";

function App() {

  const [ currentRepo, setCurrentRepo ] = useState("")
  const [ repos, setRepos ] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`${currentRepo}`)

    if (data.id) {
      const repoExists = repos.find(repo => repo.id === data.id)

      if (!repoExists) {
        setRepos (prev => [...prev, data])
        setCurrentRepo("")
        return
      } else {
        alert("Repositório já adicionado.")
      }
    } else {
      alert ("Este repositório não foi encontrado. Por favor, tente novamente.")
    }
  }

  return (
    <Container>
      <img src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png" alt="Github Logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map((repo) => <Repositorios repo={repo}/>)}
      
    </Container>
  );
}

export default App;
