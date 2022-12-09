import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api.js";
import Home from './HomePage/HomePage.js';
import Navbar from "./Navbar/Navbar.js";
import CadastraAluno from "./AlunoPages/CadastrarAluno.js";
import CadastraProfessor from "./ProfessorPages/CadastrarProfessor";
import ListaAluno from "./AlunoPages/ListarAluno.js";
import ListaProfessor from "./ProfessorPages/ListarProfessores";
import AtualizaAluno from "./AlunoPages/AtualizarAluno.js";
import AtualizaProfessor from "./ProfessorPages/AtualizarProfessor";

function App() {

  const [professores, setProfessores] = useState([]);
  const [alunos, setAlunos] = useState([]);

  const getProfessores = async () => {
    const resposta = await api.get("/professores");
    return resposta.data;
  };

  const cadastraProfessor = async (professor) => {
    const pedido = {
      ...professor,
    };
    const resposta = await api.post("/professores", pedido);
    setProfessores([...professores, resposta.data]);
  };

  const atualizaProfessor = async (professor) => {
    const resposta = await api.put(`/professores/${professor.id}`, professor);
    const { id } = resposta.data;
    setProfessores(
      professores.map((professor) => {
        return professor.id === id ? { ...resposta.data } : professor;
      })
    );
  };

  const deletaProfessor = async (id) => {
    await api.delete(`/professores/${id}`);
    const professoresRestantes = professores.filter((professor) => {
      return professor.id !== id;
    });
    setProfessores(professoresRestantes);
  };

  const getAlunos = async () => {
    const response = await api.get("/alunos");
    return response.data;
  };

  const cadastraAlunos = async (aluno) => {
    const pedido = {
      ...aluno,
    };
    const resposta = await api.post("/alunos", pedido);
    setAlunos([...alunos, resposta.data]);
  };

  const atualizaAluno = async (aluno) => {
    const resposta = await api.put(`/alunos/${aluno.id}`, aluno);
    const { id } = resposta.data;
    setAlunos(
      alunos.map((aluno) => {
        return aluno.id === id ? { ...resposta.data } : aluno;
      })
    );
  };

  const deletaAluno = async (id) => {
    await api.delete(`/alunos/${id}`);
    const alunosRestantes = alunos.filter((aluno) => {
      return aluno.id !== id;
    });
    setAlunos(alunosRestantes);
  };

  useEffect(() => {
    const getAllProfessores = async () => {
      const allProfessores = await getProfessores();
      if (allProfessores) setProfessores(allProfessores);
    };
    getAllProfessores();
  }, []);

  useEffect(() => {
    const getAllAlunos = async () => {
      const allAlunos = await getAlunos();
      if (allAlunos) setAlunos(allAlunos);
    };

    getAllAlunos();
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>

          <Route path="/" exact render={() => (
            <Home />
          )} />

          <Route path="/alunos" render={(props) => (
            <ListaAluno {...props} alunos={alunos} getAlunosId={deletaAluno} />
          )} />

          <Route path="/professores" render={(props) => (
            <ListaProfessor {...props} professores={professores} getProfId={deletaProfessor} />
          )} />

          <Route path="/cadastrarAluno" render={(props) => (
            <CadastraAluno {...props} cadastraAluno={cadastraAlunos} />
          )} />

          <Route path='/cadastrarProfessor' render={(props) => (
            <CadastraProfessor {...props} cadastraProfessor={cadastraProfessor} />
          )} />

          <Route path="/atualizarAluno" render={(props) => (
            <AtualizaAluno {...props} atualizaAluno={atualizaAluno} />
          )} />

          <Route path="/atualizarProfessor" render={(props) => (
            <AtualizaProfessor {...props} atualizaProfessor={atualizaProfessor} />
          )} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
