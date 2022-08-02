import PratoStyles from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom'
import classnames from 'classnames';
import cardapio from 'data/cardapio.json';

export default function Prato(){
  
  const {id} = useParams();
  const prato = cardapio.find(item => item.id === Number(id));

  const navigate = useNavigate();

  if(! prato){ return '';}    
  return(
    <>
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
        <div className={PratoStyles.tags}>
          <div className={classnames({
            [PratoStyles.tags__tipo] : true,
            [PratoStyles[`tags__tipo__${prato.category.label.toLowerCase()}`]] : true
          })}>
            {prato.category.label}
          </div>
          <div className={PratoStyles.tags__porcao}>
            {prato.size} g
          </div>
          <div className={PratoStyles.tags__qtdpessoas}>
            Serve {prato.serving} pessoa{prato.serving === 1 ? '': 's'}
          </div>
          <div className={PratoStyles.tags__valor}>
            R$ {prato.price.toFixed(2)} 
          </div>
        </div>
      </section>
    </>
  )
}