import './App.css';
import MeuHeader from './componentes/MeuHeader';

function App() {
  return (
    <div>
      <MeuHeader></MeuHeader>
      <main class="main">
        <h1 class="heading">Encontre eventos em qualquer lugar.</h1>
        <p class="text">Pesquise centenas de eventos. Adquira seus ingressos com segurança e tranquilidade.</p>
        <form class="form">
          <input type="text" class="input" placeholder="Digite aqui sua busca"></input>
          <button class="btn">Buscar</button>
        </form>
      </main>

      <footer class="footer">
        <p class="copyright">&copy; 2026. Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
