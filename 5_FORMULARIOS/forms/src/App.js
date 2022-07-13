import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
     <h1>Formulários em React</h1>
     <MyForm user={{name:'Talys', email:'talys@teste.com', bio:'Sou um estudante', role:'admin'}}/>
    </div>
  );
}

export default App;
