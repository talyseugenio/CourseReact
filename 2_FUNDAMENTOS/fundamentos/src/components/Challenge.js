const Challenge = () =>{
    
    const um = 2
    const dois = 1

    const handleSum = () =>{
        let soma
        soma = um + dois 
        console.log(soma)
    }

    return(
        <div>
            <h1>Número 1: {dois}</h1>
            <h1>Número 2: {um}</h1>
            <button onClick={handleSum}>
                Somar No Console!
            </button>
        </div>
    )
}

export default Challenge