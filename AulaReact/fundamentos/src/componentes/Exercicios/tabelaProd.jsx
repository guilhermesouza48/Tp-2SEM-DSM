import React from 'react';
import produtos from './produtos.js';
import './tabelaProd.css'

const Tabela = props => {

    function getLinhas(){
        return produtos.map((produto, i)=> {
            return (
                <tr className={i % 2 === 0 ? "par" : "impar"}>
                    <td className="alinha">{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td className="alinha">{produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                </tr>
            )
        })
    }
    
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}

export default Tabela