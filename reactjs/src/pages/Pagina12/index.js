import Conteudo from './Style'
import Rodape from '../../components/comun/rodapé';
import UserBox from '../../components/comun/UserBox';
import Cabecalho from "../../components/comun/cabecalho pesquisa"
import Api from '../../services/Api';
import { useEffect, useState } from 'react';
let api = new Api();


export default function Pagina12 (props){
    const[id, setId] = useState([]);
    const[vaga, setVaga] = useState([])
    let Parametros = props.location.state;

    let encontrarEmrpesa = async ()=> {
        let y = api.EmpresaBaseadaemArea(props.area) 
    }

    let ListarVagas = async () =>{
        let r = await api.listarVagasIDempresa(8)
        setVaga(r)
    }

    useEffect(() =>{
        ListarVagas();
    },[])


    return(
        <Conteudo>
            <div class="f10-tudo">
                
                <Cabecalho onde={'pessoal'} pg={false}/>

                <div class="f10-filtro1">Resultado:⠀  <div>Desenvolvedor</div></div>

                <div class="f10-areas">


                <div class="f10-setas">
                    <div class="f10-boxes">
                    {vaga.map(item => 
                    <UserBox
                        descricao={item.ds_descricao} 
                        cidade={item.ds_local_trabalho != null && item.ds_local_trabalho.lenght > 20 ? item.ds_local_trabalho.substr(0, 20) :item.ds_local_trabalho} 
                        profissao={item.ds_profissao}
                        salario={item.ds_salario_de}
                        salarioa={item.ds_salario_a}
                        id={item.id_empresa}
                        vaga={item.vaga} 
                        idvaga={item.id_vaga}
                        formacao={item.ds_formacao}
                        qualificacao={item.ds_qualificacao}
                        tipocontrato={item.ds_tipo_contratacao}
                        beneficios={item.ds_beneficios}
                        hora={item.ds_hora_trabalho}
                        bt_empresa={true}
                    />
                    
                )}

                    </div>
                        
                </div>



                </div> 

                <Rodape/>
            </div>
    </Conteudo>

    );
}