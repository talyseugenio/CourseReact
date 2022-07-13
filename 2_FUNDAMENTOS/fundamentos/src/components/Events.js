const Events = () => {
    
    const handleMyEvent = (e) => {
        //e = event - fica implicito
        console.log(e)

        console.log('Evento Ativado')
    }
    
    const renderSomething = (x) =>{
        if(x){
            return <h1>Renderizando Isso</h1>
        }else{
            return <h1>Tambem posso renderizar isso</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou')}>Clique aqui também</button>
                <button onClick={() => {
                    if(true){
                        console.log('Isso não deveria estar aqui =)')
                    }
                }}>
                    Clique aqui, por favor
                </button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events