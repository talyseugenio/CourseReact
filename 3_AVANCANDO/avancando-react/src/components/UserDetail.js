const UserDetail = ({id, name, age, job}) => {
  return (
    <div>
        <ul>
            <li key = {id}>Nome de pessoa: {name}</li>
            <li key = {id}>Idade da pessoa: {age}</li>
            <li key={id}>Trabalho da pessoa: {job}</li>
        </ul>
        {age >= 18 ? 
        (
            <p>{name} está pronta para tirar carteira de habilitação</p>
        ): 
        (
            <p>{name} não está apto para tirar carteira de habilitação por ter menos de 18 anos</p>
        )}
    </div>
  )
}

export default UserDetail