const llamadoAPI = async (data) => {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Contend-Type' :'application/json'
        },
        body:JSON.stringify(data),
        cache: 'no-cahe'
    }
    const respuesta = await fetch('/api/productos/',options)
    const res = await respuesta.json()
    res > 0 ? mje.innerHTML='ok' : mje.innerHTML='error'
}