import React from "react";
import './AtualizarAluno.css'

class AtualizarAluno extends React.Component {
  constructor(props) {
    super(props);
    const { id, nomeAluno, cpfAluno, numeroMatricula, notaModulo1,
      notaModulo2, notaModulo3, salaModulo } = props.location.state.aluno;
    this.state = {
      id,
      nomeAluno,
      cpfAluno,
      numeroMatricula,
      notaModulo1,
      notaModulo2,
      notaModulo3,
      salaModulo
    };
  }

  atualiza = (e) => {
    this.props.atualizaAluno(this.state);
    this.setState({
      nomeAluno: "", cpfAluno: "", numeroMatricula: "", notaModulo1: "",
      notaModulo2: "", notaModulo3: "", salaModulo: ""
    });
    this.props.history.push("/alunos");
  };
  render() {
    return (
      <div>
        <h2>Editar Aluno</h2>
        <form className="ui form container-fluid" onSubmit={this.atualiza}>
          <div>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Informe o Nome do Aluno"
              value={this.state.nomeAluno}
              onChange={(e) => this.setState({ nomeAluno: e.target.value })}
            />
          </div>
          <div>
            <label>CPF</label>
            <input
              type="text"
              placeholder="Inform o CPF do Aluno"
              value={this.state.cpfAluno}
              onChange={(e) => this.setState({ cpfAluno: e.target.value })}
            />
          </div>
          <div>
            <label>Matricula</label>
            <input
              type="text"
              placeholder="Informe o numero de matricula do aluno"
              value={this.state.numeroMatricula}
              onChange={(e) => this.setState({ numeroMatricula: e.target.value })}
            />
          </div>
          <div>
            <label>Nota Modulo 1</label>
            <input
              type="text"
              placeholder="Informe a nota que o aluno tirou no modulo 1"
              value={this.state.notaModulo1}
              onChange={(e) => this.setState({ notaModulo1: e.target.value })}
            />
          </div>
          <div>
            <label>Nota Modulo 2</label>
            <input
              type="text"
              placeholder="Insira a nota que o aluno tirou no modulo 2"
              value={this.state.notaModulo2}
              onChange={(e) => this.setState({ notaModulo2: e.target.value })}
            />
          </div>
          <div>
            <label>Nota Modulo 3</label>
            <input
              type="text"
              placeholder="Insira a nota que o aluno tirou no modulo 3"
              value={this.state.notaModulo3}
              onChange={(e) => this.setState({ notaModulo3: e.target.value })}
            />
          </div>
          <div>
            <label>Modulo da Turma</label>
            <select value={this.state.salaModulo} onChange={(e) => this.setState({ salaModulo: e.target.value })}
            >
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <button>Alterar</button>
        </form>
      </div>
    );
  }
}

export default AtualizarAluno;
