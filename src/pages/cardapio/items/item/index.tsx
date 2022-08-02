import ItemStyles from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/tagsPrato';

export default function Item(props: Prato){
  
  const {title, description, photo} = props

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
        <TagsPrato {...props}/>
      </div>
    </div>
  )
}