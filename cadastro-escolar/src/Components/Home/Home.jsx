import React from 'react'
import List from './List/List'
import Data from './Data/Data'
import{HomeStyle} from './homeStyle'
import  { useState } from "react";

const Home = () => {
  const [searchName, setSearchName] = useState("");

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <HomeStyle>
     
      <List/>
      <div>
        <h2>Dados Cadastrais</h2>
        <input type="text" value={searchName} onChange={handleSearch} placeholder="Digite o nome do aluno" />
        <Data studentName={searchName} />
      </div>
      
    </HomeStyle>
  )
}

export default Home