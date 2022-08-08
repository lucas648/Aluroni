import PratoStyles from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import { lazy } from 'react';

const NotFound = lazy(()=> import('pages/notFound'));
const TagsPrato = lazy(()=> import('components/tagsPrato'));
const Home = lazy(()=> import('components/home'));


export default function Prato(){
  
  const {id} = useParams();
  const prato = cardapio.find(item => item.id === Number(id));

  const navigate = useNavigate();

  if(! prato){ return <NotFound/>;}

  return(
    <Home>
      <button 
        onClick={()=>{navigate(-1)}}
        className={PratoStyles.voltar}
      >
        {'< Voltar'}
      </button>
      <section className={PratoStyles.container}>
        <h1 className={PratoStyles.titulo}>{prato.title}</h1>
        <div className={PratoStyles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={PratoStyles.conteudo}>
          <p className={PratoStyles.conteudo__descricao}>
            {prato.description}
          </p>
        </div>
        <TagsPrato {...prato}/>
      </section>
    </Home>
  )
}