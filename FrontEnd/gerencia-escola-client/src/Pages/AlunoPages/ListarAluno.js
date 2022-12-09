import React from "react";
import { Link } from "react-router-dom";
import QuadroAluno from "./QuadroAluno.js"
import './ListarAluno.css'
import Table from "react-bootstrap/esm/Table.js";

const ListarAluno = (props) => {
  const deletarAluno = (id) => {
    props.getAlunosId(id);
  };

  const listarQuadroAluno = props.alunos.map((aluno) => {
    return (
      <QuadroAluno
        aluno={aluno}
        clickHander={deletarAluno}
        key={aluno.id}
      />
    );
  });
  return (
    <div>
      <div>
        <h2>
          Alunos Cadastrados:
        </h2>
        <Link to="/cadastrarAluno">
          <button>ADICIONAR NOVO ALUNO</button>
        </Link>

      </div>
      <Table>{listarQuadroAluno}</Table>
    </div>
  );
};

export default ListarAluno;
