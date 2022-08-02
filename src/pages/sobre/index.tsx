import SobreStyles from './Sobre.module.scss';
import temaStyles from 'styles/Tema.module.scss';

import casa from 'assets/sobre/casa.png'
import massa1 from 'assets/sobre/massa1.png'
import massa2 from 'assets/sobre/massa2.png'


export default function Sobre(){
  
  const imagens = [massa1, massa2];

  return(
    <section>
      <h3 className={temaStyles.titulo}>Sobre</h3>
      <div className={SobreStyles.sobreNos}>
        <img src={casa} alt="Casa Lucaroni" />
        <div className={SobreStyles.sobreNos__texto}>
          <p>
            Na casa Lucaroni oferecemos a vocês a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja simplesmente única!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com as melhores opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, contamos com uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={SobreStyles.imagens}>
        {imagens.map((image,index)=>(
          <div key={index} className={SobreStyles.imagens__img}>
            <img src={image} alt="Imagem da massa"/>
          </div>
        ))}
      </div>
    </section>
  )
}