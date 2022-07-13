import './App.css';
import CarDetail from './components/CarDetail';

function App() {

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

  return (
    <div className="App">
     {cars.map((car) => (
      <CarDetail 
      key={car.id}
      brand={car.brand} 
      color={car.color} 
      newCar={car.newCar} 
      km={car.km} 
      />
     ))}
    </div>
  );
}

export default App;
