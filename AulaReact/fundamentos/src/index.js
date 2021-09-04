import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Componente1 from './componentes/FundBasico/PrimeiroCom'
import Componente2 from './componentes/FundBasico/SegundoCom'
import Componente3 from './componentes/FundBasico/TerceiroCom'
import Aluno from './componentes/FundBasico/TerceiroCom'


const msg = 'Olá guilherme gostosão!'

ReactDOM.render(
    <div>
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
        <Aluno 
            nome='sorza'
            nota='6.5'
        />
    </div>,
    document.getElementById('root')
)