export default function Parametro(params)
{
    let num = params.numero * 10
    return (
        <div>
            <h1>Componente 2</h1>
            <h2>{ params.titulo }</h2>
            <h3>{ params.subtitulo }</h3>
            <p>{ num }</p>
        </div>

    )
}