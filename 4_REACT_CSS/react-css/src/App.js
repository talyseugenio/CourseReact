import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react'
import Title from './components/Title';

function App() {

  const n =15
  const [name] = useState('Talys')
  const redTitle = true

  return (
    <div className="App">
      {/*CSS global */}
      <h1>React com CSS</h1>
      {/*CSS de componente */}
      <MyComponent/>
      <p>Esse parágrafo é do APP.js</p>
      {/*Inline CSS */}
      <p style = {{color:'blue', padding:'25px', borderTop:'2px solid red'}}>
        Esse elemento foi estilizado de forma inline
      </p>
      {/*Css inline dinâmico */}
      <h2 style={n<10 ?( {color:'purple'}):({color: 'pink'} )}>
        CSS dinâmico
      </h2>
      <h2 style={name === 'Talys' ? {color:'green', backgroundColor:'#000'}:(null)}>
        CSS dinâmico
      </h2>
      {/*Classe Dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este título tem classe dinâmica</h2>
      {/*CSS modules */}
      <Title/>
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
