import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(['Talys', 'Pedro', 'Josias', 'Matheus'])

    const [users, setUsers] = useState([
      {id:1, name:'Talys', age: 20},
      {id:2, name:'Pedro', age: 25},
      {id:3, name:'Josias', age: 19},
      {id:4, name:'Matheus', age: 31}
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * (users.length));
      //previous staate
      setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id);
      })
    }

  return (
    <div>
        <ul>
          {/*Por ser jsx, o map utiliza parenteses */}
            {list.map((item, i) => (
              //o index que foi utilizado é o do proprio método 'map'
                <li key={i}>{item}</li>
            ))}
            {/*Gera erro no console pela lista não ter uma key */}
        </ul>
        <ul>
          {/*Projetos reais */}
          {users.map((users) => (
            <li key={users.id}>{users.name} - {users.age}</li>
          ))}
        </ul>
        {/*Previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender