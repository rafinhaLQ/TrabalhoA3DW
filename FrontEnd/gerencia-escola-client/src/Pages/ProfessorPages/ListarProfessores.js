import React from "react";
import { Link } from "react-router-dom";
import QuadroProfessor from "./QuadroProfessor.js";
import './ListarProfessores.css'
import Table from "react-bootstrap/esm/Table.js";

const ListarProfessores = (props) => {
  const deletarProfessor = (id) => {
    props.getProfId(id);
  };

  const listarQuadroProfessor = props.professores.map((professor) => {
    return (
      <QuadroProfessor
        professor={professor}
        clickHander={deletarProfessor}
        key={professor.id}
      />
    );
  });

  return (
    <div>
      <div>
        <h2>
          Professores Cadastrados:
        </h2>
        <Link to="/cadastrarProfessor">
          <button>ADICIONAR NOVO PROFESSOR</button>
        </Link>

      </div>
      <Table>{listarQuadroProfessor}</Table>
    </div>
  );
};

export default ListarProfessores;
