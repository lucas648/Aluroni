import filtros from './filtros.json'
import FiltroStyles from './Filtros.module.scss'

type IOpcao = typeof filtros[0]; 

export default function Filtros(){

  const selecionarFiltro = (opcao: IOpcao)=>{

  }

  return(
    <div className={FiltroStyles.filtros}>
      {filtros.map((opcao)=>(
        <button 
          className={FiltroStyles.filtros__filtro} 
          key={opcao.id}
          onClick={()=> selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  )
}