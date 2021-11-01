import Conteudo from "./styled";

import { Link } from 'react-router-dom'

import { useState,useEffect } from 'react'

export default function UsuBox (props) {
    let imagem = '';

    if(props.bt_empresa === true){
        imagem = 'f10-empresa.png'
    } else{
        imagem = 'f10-fotoperfil.png'
    }

    let path =  `../../assets/images/pagina 9,10,11,12/${imagem}`

    return(
        <Conteudo>
            <div class="f10-fotofiltro"><img src={path} alt=""/> </div>
            <div class="f10-texto">
                <div class="f10-filtronome"><Link to={{ pathname: '/empresa', state: props }}> {props.empresa}</Link> </div>
                <div class="f10-cidade">{props.cidade}</div>
                <div class="f10-profissao">{props.profissao}<div class="f10-barra">-</div><div class="f10-filtroarea">{props.area}</div></div>
                <div class="f10-data">{`R$ ${props.salario}`}</div>
            </div>

            <div class= "vazio" > {props.cnpj} </div>
            <div class= "vazio"> {props.id} </div>
            <div class= "vazio"> {props.telefone} </div>

        </Conteudo>

    );
}