import React from "react"
import './cartao.css'

const Cartao = props => {
    return (
        <div className = "Cartao">
            <div className="Titulo">{props.Titulo}</div>
            <div className="Conteudo">{props.children}</div>
        </div>
    )
}

export default Cartao