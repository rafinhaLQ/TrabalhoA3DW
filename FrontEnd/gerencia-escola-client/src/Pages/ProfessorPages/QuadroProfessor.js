import Table from 'react-bootstrap/Table';
import React from "react";
import { Link } from "react-router-dom";
import './QuadroProfessor.css'

const QuadroProfessor = (props) => {
  const { id, nomeProfessor, cpfProfessor, tituloAcademico, disciplina } = props.professor;

  return (
    <Link to={{ pathname: `/professores`, state: { professor: props.professor } }}>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Título Acadêmico</th>
            <th>Disciplina</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{nomeProfessor}</td>
            <td>{cpfProfessor}</td>
            <td>{tituloAcademico}</td>
            <td>{disciplina}</td>
            <td><i
              className="trash alternate outline icon"
              style={{ color: "red", marginTop: "7px", marginLeft: "10px", marginRight: "25%", marginBottom: "7px" }}
              onClick={() => props.clickHander(id)}
            >
            </i>
              <Link to={{ pathname: `/atualizarProfessor`, state: { professor: props.professor } }}>
                <i
                  className="edit alternate outline icon"
                  style={{ color: "blue", marginTop: "7px" }}
                ></i>
              </Link></td>
          </tr>
        </tbody>
      </Table>
    </Link>
  );
};

export default QuadroProfessor;
