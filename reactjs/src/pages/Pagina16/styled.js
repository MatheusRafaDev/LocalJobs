import styled from "styled-components"

const Pagina15 = styled.div`

.tudo {
    margin: 0px;
    background-color: #404756;
    font-family: Bold;
    color: white;
    font-family: 5em;
}
.mensagemaviso {
    display: none;
}

.box-titulo a {
    color: white;
}

h2 {
    display: none
}
.currilosscrool {
    display: none;
}
.f16-mensagens {
    display: none;
}
@font-face {
    font-family: Regular;
    src: url(./assets/fonts/Montserrat-Regular.ttf);
}


@font-face {
    font-family: Bold;
    src: url(./assets/fonts/Montserrat-Bold.ttf);
}

.nodelete {
    display:none;
}


body {
    margin: 0px;
    background-color: #404756;
    font-family: Bold;
    color: white;
    font-family: 5em;
}


.f10-cabecario {
    display: flex;
    flex-direction: row;
    font-family: Bold;
    font-size: 1.3em;
    color: white;
    justify-content: space-between;
    align-content: center;
    background-color: rgba(95, 103, 121, 0.7);
    padding: 0.8rem;
    align-content: center;
    align-content: center;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}


.f10-parte1 {
    flex-direction: row;
    display: flex;
    align-items: center;
}

.f10-parte2 {
    flex-direction: row;
    display: flex;
    align-items: center;
}

.f10-logo img {
    height: 50px;
    width: auto;
    margin-left: 3em;
    margin-right: 1em;
}
.f10-imagem img {
    height: 25px;
    width: auto;
    border-radius: 100%;
    margin-left: 1em;
    margin-right: 3em;
    background-color:#7F8694 ;
    border-radius: 100%;
    padding: 1rem;
}



.f16-textarea {
    justify-content: center;
    display: flex;
    flex-direction: row;
}
.salarioinput {
    background-color: #2A3244;
    border-radius: 15px;
    padding-left: 2em;
    padding-top: 3em;
    width: 29em;
    margin-right: 5em;
}



.inputs {
    background-color: #2A3244;
    border-radius: 15px;
    padding-left: 2em;
    padding-top: 3em;
    width: 29em;
    margin-right: 5em;
}

.f16-mensagens {
    background-color: #2A3244;
    border-radius: 15px;
    padding-left: 2em;
    padding-top: 3em;
    width: 29em;
    margin-right: 5em;
}


input {
    width: 425px;
    height: 35px;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 1em;
    margin-bottom: 1em;
}

textarea {
    border-radius: 5px;
    border: none;
    outline: none;
    resize: none;
    margin-top: 1em;
    margin-bottom: 1em;
}

.salarioa input {
    width: 180px;
    height: 35px;
    margin-left: 0.5em;
    margin-right: 0.5em;
}

.salariode input {
    width: 180px;
    height: 35px;
    margin-left: 0.5em;
    margin-right: 0.5em;
}

.salarios {
    flex-direction: row;
    display: flex;
}

.f16-configuracoes {
    margin-left: 4em;
    margin-bottom: 2.5em;
    font-size: 1.5em;
    margin-top: 2em;
}

select {
    width: 32em;
    height: 35px;
    border-radius: 5px;
    margin-top: 1em;
    margin-bottom: 1em;
}

.f16-mensagens {
    margin-top: 3em;
}

.inputhoras {
    margin-bottom: 3em;
}

.salarioinput {
    margin-bottom: 2em;
}

.imagem img {
    height: 25px;
    width: auto;
    border-radius: 100%;
    margin-right: 1em;
    background-color:#7F8694 ;
    border-radius: 100%;
    padding: 1rem;
}

.imagem {
    align-items: center;
    display: flex;
    font-size: 20px;
    margin-bottom: 1em;
    cursor: pointer;
}

.escrever {
    align-items: center;
    display: flex;
    align-content: center;
    margin-top: 5em;
    padding-bottom: 1em;
    margin-bottom: 3em;
}

.escrever button {
    outline: none;
    border: none;
    background-color: #2A3244;
    align-items: center;
    display: flex;
    cursor: pointer;
}

.escrever img {
    background-color: #2A3244;
    height: 3em;
}

.escrever input::placeholder {
    color: white;
}

.escrever input {
    border-radius: 20px;
    background-color: #107AD1;
    color: white;
    width: 380px;
    font-family: Regular;
    font-size: 1em;
}

.mensagem {
    font-family: Regular;
    color: #7F8694;
    font-size: 1.2em;
}

.uso {
    cursor: pointer;
}

.mensagemaviso {
    margin-top: 2em;
    flex-direction: row;
    display: flex;
}

.trabalho {
    margin-bottom: 3em;
}
.curiculos {
    height: 200px;
    overflow-y: scroll;
}

.curiculos::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #7F8694;
}

.curiculos::-webkit-scrollbar {
	width: 8px;
	background-color: #7F8694;
    border-radius: 10px;
}

.curiculos::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #CBCBCB;
}


.linkcuriculo img {
    height: 3.5em;
    margin-left: 1em;
    color: white;
    filter: invert(100%);
}
.linkcuriculo {
    border-radius: 10px;
    background-color: #107AD1;
    align-items: center;
    display: flex;
    height: 70px;
    width: 25em;
    margin-bottom: 1em;
    margin-left: 1em;
    cursor: pointer;
}

.curiculos {
    background-color: #2A3244;
    height: 25em;
    border-radius: 10px;
    width: 31.3em;
    margin-top: 2em;
}

.linkusuario {
    font-family: 5rem;
    margin: 1em;
}


.botoes {
    margin-top: 2em;
    justify-content: center;
    flex-direction: column;
    display: flex;
}

.delete {
    border: none;
    color: white;
    background-color: #8C0000;
    border-radius: 10px;
    font-size: 1.5em;
    font-family: Bold;
    width: 20.8em;
    margin-bottom: 0.5em;
    margin-top: 1em;
    height: 2em;
    cursor: pointer;
}

.save {
    border: none;
    color: white;
    background-color: #1096FF;
    border-radius: 10px;
    font-size: 1.5em;
    font-family: Bold;
    width: 20.8em;
    margin-bottom: 1em;
    height: 2em;
    cursor: pointer;
}

hr {
    height:5px;
    border-width:0;
    color:#5F6779;
    margin-left: 0px;
    margin-right: 0px;
    margin-top:4em;
    background-color:#5F6779;
}

.f10-redesbaixo img {
    height: 20px;
    width: auto;
}

.f10-redesbaixo {
    font-size: 1rem;
    font-family: Regular;
    color: white;
}

.f10-navegacao {
    font-size: 1rem;
    font-family: Montserrat;
    color: white;
    flex-direction: column;
    display: flex;
}

.f10-navegacaobaixo {
    font-size: 1rem;
    font-family: Regular;
    color: white;
    
}

.f10-redes {
    margin-bottom: 2rem;
    margin-left: 3rem;
}

.f10-imagembaixo {
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.f10-textobaixo {
    margin-left: 2rem;
    font-size: 1.5rem;
    font-family: Montserrat;
    color: white;
}

.f10-rodape {
    margin-top: 3rem;
    margin-left: 3rem;
}

.f10-rodape2 {
   flex-direction: row;
   display: flex;
}

.f10-navegacao2{
    margin-bottom: 3rem;
    font-size: 1.5rem;
    font-family: Montserrat;
    color: white;
    flex-direction: column;
    display: flex;
}

.f10-redes2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-family: Montserrat;
    color: white;
    flex-direction: column;
    display: flex;
    
}

.textarea2 {
    margin-left: 2em;
}
`

export default Pagina15;