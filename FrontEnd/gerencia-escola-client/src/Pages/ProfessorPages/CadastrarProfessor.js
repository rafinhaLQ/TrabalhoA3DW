import React from "react";
import "./CadastrarProfessor.css";

class CadastrarProfessor extends React.Component {
  state = {
    nomeProfessor: "",
    cpfProfessor: "",
    tituloAcademico: "",
    disciplina: ""
  };

  add = (e) => {
    this.props.cadastraProfessor(this.state);
    this.setState({
      professorNome: "", cpfProfessor: "",
      tituloAcademico: "", disciplina: ""
    });
    this.props.history.push("/professores");
  };

  render() {
    return (
      <div>
        <h2>ADICIONAR PROFESSOR</h2>
        <form className="ui form container-fluid" onSubmit={this.add}>
          <div>
            <label>Nome Completo</label>
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
            <label>Título Acadêmico</label>
            <input
              type="text"
              placeholder="Informe o  titulo academico do professor"
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
          <button>CADASTRAR</button>
        </form>
      </div>
    );
  }
}

export default CadastrarProfessor;

