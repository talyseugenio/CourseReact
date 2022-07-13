import './App.css';
import City from  './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import {useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFuntion from './components/ExecuteFuntion';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetail from './components/UserDetail';

function App() {
  const name = 'Talys'
  const [userName] = useState('Maria')

  const cars = [
    {
      id:1, 
      brand: 'Ferrari', 
      color:'Amarela',
      newCar:true,
      km: 0
    }, 
    {
      id:2, 
      brand: 'Kia', 
      color:'Branco',
      newCar:false,
      km: 6465
    }, 
    {
      id:3, 
      brand: 'Renault', 
      color:'Azul',
      newCar:false,
      km: 234
    }
  ]

  function showMessage(){
    console.log('Evento do componente pai')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  const peoples = [
    {
    id: 1,
    name: 'Talys', 
    age: 20,
    job: 'Cientista da computação'
  },
  {
    id: 2,
    name: 'João', 
    age: 32,
    job: 'Analista de Negócios'
  },
  {
    id: 3,
    name: 'Túlio', 
    age: 12,
    job: 'Estudante'
  }
]

  return (
    <div className="App">
     <h2>Avançando em React</h2>
      {/*Imagem em public */}
     <div>
       <img src="/img1.jpg" alt="Paisagem" />
     </div>
     {/*Imagem com Assets */}
     <div>
       <img src={City} alt="Cidade" />
     </div>
     <ManageData/>
     <ListRender/>
     <ConditionalRender/>
     <ShowUserName name ={name}/>
     <ShowUserName name ={userName}/>
     <CarDetails id = {4}brand='VW' km ={100000} color = 'Azul' newCar ={false}/>
     {/*Reaproveitando*/}
     <CarDetails  id = {5} brand='Ford' km ={0} color = 'Vermelha' newCar ={true}/>
     <CarDetails  id = {6} brand='Fiat' km ={4500} color = 'Branco' newCar ={false}/>
     {/*loop em array de objeto*/}
     {cars.map((car) => (
      <CarDetails 
      key={car.id}
      brand={car.brand} 
      color={car.color} 
      newCar={car.newCar} 
      km={car.km} 
      />
     ))}
     <Fragment propFragment = 'Teste'/>
     <Container myValue='Testing'>
      <p>Esse é o conteúdo</p>
      <h5>Testando container</h5>
     </Container>
     {/*Executar Função*/}
     <ExecuteFuntion myFunction={showMessage}/>
     {/*Elevação de state*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Desafio Final*/}
      {peoples.map((people) => (
        <UserDetail 
        key = {people.id}
        name = {people.name}
        age = {people.age}
        job = {people.job}
        />
  ))}
    </div>
  );
}

export default App;
