import React from 'react'
import { ListStyle } from './styleList';
const List = () => {
  const alunos = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'Pedro' },
    { id: 4, nome: 'Ana' },
    { id: 5, nome: 'Luana'},
    { id: 6, nome: 'Carlos'},
  ];

  return (
    <ListStyle>
      <h2>Lista de Alunos</h2>
      <ol>
        {alunos.map((aluno) => (
          <li key={aluno.id}>{aluno.nome}</li>
        ))}
      </ol>
    </ListStyle>
  )
}

export default List
