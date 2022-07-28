import ItemStyles from './Item.module.scss'
import  Logo from 'assets/logo.svg';


export default function Item(){
  return(
    <div className={ItemStyles.item}>
      <div className={ItemStyles.item__imagem}>
        <img alt='image' src={Logo}/>
      </div>
      <div className={ItemStyles.item__descricao}>
        <div className={ItemStyles.item__titulo}>
          <h2>Massa</h2>
          <p>descriçao</p>
        </div>
        <div className={ItemStyles.item__tags}>
          <div className={ItemStyles.item__tipo}>
            Massa
          </div>
          <div className={ItemStyles.item__porcao}>
            400 gramas
          </div>
          <div className={ItemStyles.item__qtdpessoas}>
            serve 2 pessoas
          </div>
          <div className={ItemStyles.item__valor}>
            R$ 40,00
          </div>
        </div>
      </div>
    </div>
  )
}