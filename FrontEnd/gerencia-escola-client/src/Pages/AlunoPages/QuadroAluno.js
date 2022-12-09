import Table from 'react-bootstrap/Table';
import React from "react";
import { Link } from "react-router-dom";
import './QuadroAluno.css'

const QuadroAluno = (props) => {
  const { id, nomeAluno, cpfAluno, numeroMatricula, notaModulo1,
    notaModulo2, notaModulo3 } = props.aluno;

  let status1;

  if (notaModulo1 === "") {
    status1 = "PENDENTE";
  } else if (notaModulo1 >= 6) {
    status1 = "APROVADO";
  } else {
    status1 = "REPROVADO";
  }

  let status2;

  if (status1 === "APROVADO") {
    if (notaModulo2 >= 6) {
      status2 = "APROVADO";
    } else if (notaModulo2 === "") {
      status2 = "PENDENTE";
    } else {
      status2 = "REPROVADO";
    }
  } else {
    status2 = "PENDENTE";
  }

  let status3;

  if (status1 === "APROVADO" && status2 === "APROVADO") {
    if (notaModulo3 >= 6) {
      status3 = "APROVADO";
    } else if (notaModulo3 === "") {
      status3 = "PENDENTE";
    } else {
      status3 = "REPROVADO";
    }
  } else {
    status3 = "PENDENTE";
  }

  let modulo;

  if (status3 === "APROVADO") {
    modulo = "FINALIZADO";
  } else if (status2 === "APROVADO") {
    modulo = 3;
  } else if (status1 === "APROVADO") {
    modulo = 2;
  } else {
    modulo = 1;
  }

  return (
    <Link to={{ pathname: `/alunos`, state: { aluno: props.aluno } }}
    >
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Numero de Matrícula</th>
            <th>Status Modulo 1</th>

            <th>Status Modulo 2</th>

            <th>Status Modulo 3</th>
            <th>Modulo Atual</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>{id}</td>
            <td>{nomeAluno}</td>
            <td>{cpfAluno}</td>
            <td>{numeroMatricula}</td>
            <td>{status1}</td>
            <td>{status2}</td>
            <td>{status3}</td>
            <td>{modulo}</td>
            <td><i
              className="trash alternate outline icon"
              style={{ color: "red", marginTop: "7px", marginLeft: "10px", marginRight: "25%", marginBottom: "7px" }}
              onClick={() => props.clickHander(id)}
            ></i>
              <Link to={{ pathname: `/atualizarAluno`, state: { aluno: props.aluno } }}>
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

export default QuadroAluno;
