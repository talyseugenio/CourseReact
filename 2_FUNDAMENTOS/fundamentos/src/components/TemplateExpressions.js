const TemplateExpressions = () => {

    const name = "Talys Eugênio"
    const data = {
        age: 20, 
        job: "Student"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX react")}</p>
        </div>
    )
}

export default TemplateExpressions