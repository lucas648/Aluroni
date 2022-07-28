import cardapio from './items.json'
import Item from './item'
import ItemsStyle from './Items.module.scss'
import { useEffect, useState } from 'react'

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Items({busca, filtro, ordenador}: Props){
  
  const [lista, setLista] = useState(cardapio);

  const testaBusca = (title: string)=>{
    const regex = new RegExp(busca, 'i');
    return regex.test(title)
  }

  const testaFiltro = (id: number) =>{
    if(filtro !== null) return filtro === id;
    return true
  }

  const ordenar = (lista: typeof cardapio)=>{
    switch(ordenador){
      case 'porcao' :
        return lista.sort((a,b)=> a.size > b.size ? 1 : -1);
      case 'qtd_pessoas':
        return lista.sort((a,b)=> a.serving > b.serving ? 1 : -1);
      case 'preco':
        return lista.sort((a,b)=> a.price > b.price ? 1 : -1);
      default:
        return lista;
    }
  }

  useEffect(()=>{
    const novaLista = cardapio.filter(item => 
      testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  },[busca,filtro, ordenador])
  
  return(
    <div className={ItemsStyle.itens}>
      {
        lista.map((item)=>(
         <Item 
           key={item.id}
           {...item}
          />
        ))
      }
    </div>
  )
}