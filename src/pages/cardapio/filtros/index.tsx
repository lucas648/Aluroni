import React from 'react';
import classNames from 'classnames';
import filtros from './filtros.json'
import FiltroStyles from './Filtros.module.scss'

type IOpcao = typeof filtros[0]; 

interface Props {
  filtro: number | null,
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro} : Props){

  const selecionarFiltro = (opcao: IOpcao)=>{
    if(filtro === opcao.id) return setFiltro(null)
    return setFiltro(opcao.id)
  }

  return(
    <div className={FiltroStyles.filtros}>
      {filtros.map((opcao)=>(
        <button 
          className={ classNames({
            [FiltroStyles.filtros__filtro]: true,
            [FiltroStyles['filtros__filtro--ativo']] : filtro === opcao.id
          })} 
          key={opcao.id}
          onClick={()=> selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  )
}