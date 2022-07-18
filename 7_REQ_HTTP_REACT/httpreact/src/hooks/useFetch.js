import {useState, useEffect} from 'react'

// Customizando hook


export const useFetch = (url) => {
    const [data, setData] = useState(null)

    //refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const httpConfig = (data, method) => {
        if (method === 'POST'){
            setConfig({
                method, 
                headers: {
                    'Content-type': 'applications/json'
                }, 
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect (() =>{
        const fetchData = async () =>{
            const res = await fetch(url)

            const json = await res.json()

            setData(json)

        }

        fetchData()

    }, [url, callFetch])

    //refatorando POST
    useEffect(() => {

        const httpRequest = async () => {
            if(method === 'POST'){
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
        
                const json = await res.json();
    
                setCallFetch(json)
            }
        }
        httpRequest()
    }, [config, method, url])

    return {data, httpConfig}
}