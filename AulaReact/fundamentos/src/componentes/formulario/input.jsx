import React,{useState} from "react";

const Input = props => {
    const [valor, setValor] = useState("Inicial")
    const[numero, setNumero1] = useState(0)
    const[numero2, setNumero2] = useState(0)

    function quandoMudar(e) {
        setNumero1(e.target.value)
    }

    function quandoMudar2(e) {
        setNumero2(e.target.value)
    }

    return (
        <div>
            <h1>Calculadora</h1>
            <h3>primeiro número:</h3>
            <input value={numero} onChange={quandoMudar} />
            <h3>segundo número:</h3>
            <input value={numero2} onChange={quandoMudar2} />
            <h3>Resultado:</h3>
            <input value={parseInt(numero) + parseInt(numero2)} onChange={quandoMudar}/>
        </div>
    )
}

export default Input