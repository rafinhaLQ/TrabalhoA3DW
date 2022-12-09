import React from "react";
import './CadastrarAluno.css';

class CadastrarAluno extends React.Component {
  state = {
    nomeAluno: "",
    cpfAluno: "",
    numeroMatricula: "",
    notaModulo1: "",
    notaModulo2: "",
    notaModulo3: "",
    salaModulo: "1"
  };

  add = (e) => {
    this.props.cadastraAluno(this.state);
    this.setState({
      nomeAluno: "", cpfAluno: "", numeroMatricula: "", notaModulo1: "",
      notaModulo2: "", notaModulo3: "", salaModulo: ""
    });
    this.props.history.push("/alunos");
  };

  render() {
    return (
      <div>
        <h2>ADICIONAR ALUNO</h2>
        <form className="ui form container-fluid" onSubmit={this.add}>
          <div>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Informe o nome Aluno"
              value={this.state.nomeAluno}
              onChange={(e) => this.setState({ nomeAluno: e.target.value })}
            />
          </div>
          <div>
            <label>CPF</label>
            <input
              type="text"
              placeholder="Informe o CPF do aluno"
              value={this.state.cpfAluno}
              onChange={(e) => this.setState({ cpfAluno: e.target.value })}
            />
          </div>
          <div>
            <label>Matrícula</label>
            <input
              type="text"
              placeholder="Informe o numero de matricula do aluno"
              value={this.state.numeroMatricula}
              onChange={(e) => this.setState({ numeroMatricula: e.target.value })}
            />
          </div>
          <button>CADASTRAR</button>
        </form>
      </div>
    );
  }
}

export default CadastrarAluno;

