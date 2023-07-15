import React from 'react'
import studentList from '../../../assets/studentsList';
import { ListStyle } from './styleList';

 const List = () =>{


  return (
    <ListStyle>
      <h2>Lista de Alunos</h2>
      <ol>
        {studentList.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ol>
    </ListStyle>
  )
}

export default List