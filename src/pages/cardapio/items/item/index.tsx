import ItemStyles from './Item.module.scss';
import cardapio from 'data/cardapio.json';
import classnames from 'classnames';

//coloca-se a primeira posição pois se não ele entende como array
type Props = typeof cardapio[0];


export default function Item(props: Props){
  
  const {title, description, category, size, serving, price, photo} = props

  return(
    <div className={ItemStyles.item}>
      <div className={ItemStyles.item__imagem}>
        <img alt={title} src={photo}/>
      </div>
      <div className={ItemStyles.item__descricao}>
        <div className={ItemStyles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={ItemStyles.item__tags}>
          <div className={classnames({
            [ItemStyles.item__tipo]: true,
            [ItemStyles[`item__tipo__${category.label.toLowerCase()}`]] : true
          })}>
            {category.label}
          </div>
          <div className={ItemStyles.item__porcao}>
            {size} G
          </div>
          <div className={ItemStyles.item__qtdpessoas}>
            Serve {serving} pessoa{serving === 1 ? '' : 's'}
          </div>
          <div className={ItemStyles.item__valor}>
            R$ {price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}