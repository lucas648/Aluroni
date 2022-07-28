import cardapio from './items.json'
import Item from './item'
import ItemsStyle from './Items.module.scss'

export default function Items(){
  return(
    <div className={ItemsStyle.itens}>
      {
        cardapio.map((item)=>(
         <Item key={item.id}/>
        ))
      }
    </div>
  )
}