//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const mensaje = 'Bienvenido a mi app!!'
  const estilos = {
    backgroundColor: '#888',
    padding: '20px'
  }
  
  return (
    <div className='container'>
      <h1>Hola mundo</h1>
      <strong>otro mensaje</strong>
      <h3 style={estilos}>{mensaje}</h3>
      <NavBar></NavBar>
      <ItemListContainer greeting={'Saludos'}></ItemListContainer>
    </div>
  );
}

export default App;
