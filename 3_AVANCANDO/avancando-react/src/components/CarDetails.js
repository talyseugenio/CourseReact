//Destructing
const CarDetails = ({id, brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li key = {id}>Marca: {brand}</li>
            <li key = {id}>KM: {km}</li>
            <li key = {id}>Cor: {color}</li>
           
        </ul>
        {newCar && <p>Este carro é novo</p>}
    </div>
  )
}

export default CarDetails