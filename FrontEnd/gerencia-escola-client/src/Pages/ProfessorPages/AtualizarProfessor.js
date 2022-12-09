import React from "react";
import './AtualizarProfessor.css'

class AtualizarProfessor extends React.Component {
  constructor(props) {
    super(props);
    const { id, nomeProfessor, cpfProfessor, tituloAcademico, disciplina } = props.location.state.professor;
    this.state = {
      id,
      nomeProfessor,
      cpfProfessor,
      tituloAcademico,
      disciplina
    };
  }

  atualiza = (e) => {
    this.props.atualizaProfessor(this.state);
    this.setState({ nomeProfessor: "", cpfProfessor: "", tituloAcademico: "", disciplina: "" });
    this.props.history.push("/professores");
  };
  render() {
    return (
      <div>
        <h2>Editar Professor</h2>
        <form className="ui form container-fluid" onSubmit={this.atualiza}>
          <div>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Informe o nome do professor"
              value={this.state.nomeProfessor}
              onChange={(e) => this.setState({ nomeProfessor: e.target.value })}
            />
          </div>
          <div>
            <label>CPF</label>
            <input
              type="text"
              placeholder="Informe o CPF do professor"
              value={this.state.cpfProfessor}
              onChange={(e) => this.setState({ cpfProfessor: e.target.value })}
            />
          </div>
          <div>
            <label>Titulo Professor</label>
            <input
              type="text"
              placeholder="Informe o titulo academico do professor"
              value={this.state.tituloAcademico}
              onChange={(e) => this.setState({ tituloAcademico: e.target.value })}
            />
          </div>
          <div>
            <label>Disciplina</label>
            <input
              type="text"
              placeholder="Informe a disciplina do professor"
              value={this.state.disciplina}
              onChange={(e) => this.setState({ disciplina: e.target.value })}
            />
          </div>

          <button>Alterar</button>
        </form>
      </div>
    );
  }
}

export default AtualizarProfessor;
