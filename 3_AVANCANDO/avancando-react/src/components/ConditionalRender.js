import {useState} from 'react'

function ConditionalRender() {
    const [x] = useState(true)

    const [name, setName] = useState('Tays')


  return (
    <div>
        <h1>isso será exibido?</h1>
        {x && <p> Se x for true, sim</p>}
        {!x && <p> Agora x é falso</p>}
        <h1>If ternário</h1>
        {name === 'João' ? (
            <div>
                O nome é João
            </div>
        ): (
            <div>
                Nome não encontrado
            </div>
        )}
        <button onClick={() => setName('João')}>Clique Aqui</button>
    </div>
  )
}

export default ConditionalRender