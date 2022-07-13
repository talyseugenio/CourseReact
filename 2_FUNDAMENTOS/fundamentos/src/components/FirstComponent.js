//arquivo de componente
import MyComponents from "./MyComponents";

const FirstComponent = () =>{
    //essa função faz isso 

    /*
        Multi Line
    */

    return (
        <div>
            {/*Algum comentário */}
            <h1>Primeiro componente</h1>
            <p className="teste">Meu Primeiro texto</p>
            <MyComponents/>
        </div>
    )
}

export default FirstComponent;