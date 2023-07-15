import React from 'react'
import { HomeData, Card} from './styleData'
import studentList from '../../../assets/studentsList';

const Data = ({studentName}) => {
    
      {
  const student = studentList.find(
    (student) => student.name.toLowerCase() === studentName.toLowerCase()
  );

  if (!student) {
    return <div>Aluno não encontrado.</div>;
  }

  return (
    <HomeData>
      <Card>
        <h2>{student.name}</h2>
        <p>Turma: {student.turma}</p>
        <p>Data de Nascimento: {student.birf}</p>
        <p>Telefone: {student.fone}</p>
        <img src={student.image} alt={student.name} />
      </Card>
      
    </HomeData>
  )
}
};

export default Data


