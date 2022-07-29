import cardapio from 'data/cardapio.json';
import InicioStyles from './Inicio.module.scss'

export default function Inicio(){
  let pratosRecomendados = [...cardapio];

  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

  return(
    <section>
      <h3 className={InicioStyles.titulo}>Recomendações do Chefe!!</h3>
      <div className={InicioStyles.recomendados}>
        {
          pratosRecomendados.map((item)=>(
            <div key={item.id} className={InicioStyles.recomendado}>
              <div className={InicioStyles.recomendado__imagem}>
                <img src={item.photo} alt={item.title}/>
              </div>
              <button className={InicioStyles.recomendado__botao}>
                Ver mais
              </button>
            </div>
          ))
        }
      </div>
    </section>
  );
}