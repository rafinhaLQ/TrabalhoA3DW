import './HomePage.css';
import logo from '../../Imagens/desenho.png';
const Home = () => {
  return (
    <div>
      <h2> Navegue no sistema pelo menu acima! </h2>
      <br/>
      <br/>
      <img src={logo} alt="logo" height="100" />
      <br/>
      <br/>
      <h1> Bem vindo ao sistema de Gerenciamento de Luis Santos Institution of Tecnology! </h1>
      <h3> Algumas informações sobre nossa escola: </h3>
      <p> CNPJ: 13.526.884/0001-64 </p>
      <p> Endereço: Avenida Luís Viana, 3100-3146 Pituaçu - Imbuí, Salvador </p>
    </div>


  )
}


export default Home;