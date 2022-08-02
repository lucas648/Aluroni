import cardapio from 'data/cardapio.json';
import InicioStyles from './Inicio.module.scss';
import temaStyles from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';


import nossaCasa from 'assets/nossa_casa.png'
import { Prato } from 'types/Prato';

export default function Inicio(){
  let pratosRecomendados = [...cardapio];

  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

  const navigate = useNavigate();

  const redirecionarParaDetalhes = (prato: Prato) =>{
   navigate(`/prato/${prato.id}`,{state: {prato}}) 
  }

  return(
    <section>
      <h3 className={temaStyles.titulo}>Recomendações do Chefe!!</h3>
      <div className={InicioStyles.recomendados}>
        {
          pratosRecomendados.map((item)=>(
            <div key={item.id} className={InicioStyles.recomendado}>
              <div className={InicioStyles.recomendado__imagem}>
                <img src={item.photo} alt={item.title}/>
              </div>
              <button
                onClick={()=>{redirecionarParaDetalhes(item)}} 
                className={InicioStyles.recomendado__botao}
              >
                Ver mais
              </button>
            </div>
          ))
        }
      </div>
      <h3 className={temaStyles.titulo}>Nossa casa</h3>
      <div className={InicioStyles.nossaCasa}>
        <img src={nossaCasa} alt="Lucaroni house"/>
        <div className={InicioStyles.nossaCasa__endereco}>
          Av. Onze de Junho, 540 <br/><br/> Vila Clementino,SP 
        </div>
      </div>
    </section>
  );
}