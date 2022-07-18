import './App.css';
import {useState, useEffect} from 'react'
//custom hook
import {useFetch} from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {

  const [products, setProducts] = useState([])

  //custom hook
  const {data : items, httpConfig} = useFetch(url)

  const [name, setName] = useState('')
  const [price, setPrice] = useState()


  // - Resgatando dados da API
  //foi comentado pq está usando custom hook
  // useEffect(() => {

  //  async function fetchData(){
  //   const res = await fetch(url)

  //   const data = await res.json()

  //   setProducts(data)
  //  }
  //  fetchData()
  // }, [])

  //Adição de produtos
  const handleSubmit = async(e) => {
    e.preventDefault()

    const product = {
      name, 
      price
    }

    //foi comentado por causa do custom hook
    // const res = await fetch(url, {
    //   method: 'POST', 
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   body:JSON.stringify(product),
    // })
    // // carregamento dinâmico de dados
    // const addedProducts = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProducts])

    //refatorando post 
    httpConfig(product, 'POST')

    setName('')
    setPrice('')
  }

  return (
    <div className="App">
     <h1>Lista de Produtos</h1>
     <ul>
       {items && items.map((product) => (
          <li key={product.id}> 
            {product.name} - R$: {product.price}
          </li>
       ))}
     </ul>
     <div className='add-product'>
       <form onSubmit={handleSubmit}>
         <label>
           Nome:
           <input 
           type="text" 
           name="name" 
           value={name} 
           onChange={(e) => setName(e.target.value)} />
         </label>
         <label>
           Preço:
           <input 
           type='text' 
           name='price' 
           value={price} 
           onChange={(e) => setPrice(e.target.value)} />
         </label>
        <input type="submit" value="Criar" />
       </form>
     </div>
    </div>
  );
}

export default App;
