/* export default _ => (

 )*/

import React from "react"
import Componente1 from './componentes/FundBasico/PrimeiroCom'
import Componente2 from './componentes/FundBasico/SegundoCom'
import Componente3 from './componentes/FundBasico/TerceiroCom'
import Aluno from './componentes/FundBasico/TerceiroCom'
import CompAleatorio from './componentes/FundBasico/CompAleatorio'
import Cartao from './layout/cartao'
import Familia from "./componentes/FundBasico/Familia"
import FamiliaMembro from "./componentes/FundBasico/FamiliaMembro"
import Tabela from "./componentes/Exercicios/tabelaProd"
import Pai from "./componentes/FundBasico/indiretaPai"
import Input from "./componentes/formulario/input"

const App = () => {
    return  (
        <div>
            <Cartao Titulo="Formulário">
                <Input/>
            </Cartao>
            <Cartao Titulo="comunicação indireta">
                <Pai/>
            </Cartao>
            <Cartao Titulo='Loja de Acessórios Gamers'>
                <Tabela/>
            </Cartao>
            <Cartao Titulo = "Familia SILVA">
                <Familia sobrenome = "Silva">
                    <FamiliaMembro nome = "Felipe" />
                    <FamiliaMembro nome = "Irineu" />
                    <FamiliaMembro nome = "Kevin" />
                </Familia>
            </Cartao>

            <Cartao Titulo = "Familia LIMA">
                <Familia sobrenome = "Lima">
                    <FamiliaMembro nome = "Felipe" />
                    <FamiliaMembro nome = "Irineu" />
                    <FamiliaMembro nome = "Kevin" />
                </Familia>
            </Cartao>

            <Componente1 />
            <Componente2 
                titulo = 'AOOOO TREM Q PULA SE N BOI É MULA!'
                subtitulo = 'barraca armada tem pistoleiro'
                numero = { 9 }
            />
            <Componente3 
                nome = 'Guilherminho gameplay'
                nota = '6'
                situacao = 'Aprovado'
            />
            <Cartao Titulo = "Boletim">
                <Aluno 
                    nome='sorza'
                    nota='5.5'
                />
            </Cartao>
            
            <Cartao Titulo = "Número aleatorio">
                
                    <CompAleatorio min = {5}
                        max = {100}>
                    </CompAleatorio>
            
            </Cartao>
        </div>
    )
}

export default App
