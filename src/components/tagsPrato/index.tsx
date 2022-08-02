import classnames from 'classnames'
import { Prato } from 'types/Prato'
import TagsStyles from './TagsPrato.module.scss'

export default function TagsPrato({
  category,
  size, 
  serving,
  price
}: Prato) {
  return(
    <div className={TagsStyles.tags}>
      <div className={classnames({
        [TagsStyles.tags__tipo]: true,
        [TagsStyles[`tags__tipo__${category.label.toLowerCase()}`]] : true
      })}>
        {category.label}
      </div>
      <div className={TagsStyles.tags__porcao}>
        {size} G
      </div>
      <div className={TagsStyles.tags__qtdpessoas}>
        Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={TagsStyles.tags__valor}>
        R$ {price.toFixed(2)}
      </div>
    </div>
  )
}