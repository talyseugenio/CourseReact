import styles from './CarDetail.module.css'

const CarDetail = ({id, brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul key = {id}>
            <li className={styles.car_brand} >Marca: {brand}</li>
            <li className={styles.car_km}>KM: {km}</li>
            <li className={styles.car_color} >Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetail