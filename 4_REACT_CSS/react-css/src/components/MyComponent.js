import './MyComponent.css'

const MyComponent = () => {
  return (
    <div>
        <h1>CSS de componente</h1>
        <p>Esse é o paragrafo do componente</p>
        {/*Evitar criar parágrafo sem classe, pois o css pode 'vazar' para outros componentes */}
        <p className = 'my-comp-paragraph'> Este também é do componente</p>
    </div>
  )
}

export default MyComponent