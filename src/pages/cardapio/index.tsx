import CardapioStyles from './Cardapio.module.scss';
import Buscador from './buscador';
import { useState } from 'react';
import Filtros from './filtros';
import Ordenador from './ordenador';
import Items from './items';

export default function Cardapio(){
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return(
    <section className={CardapioStyles.cardapio}>
      <h3 className={CardapioStyles.titulo}>Cardapio</h3>
      <Buscador busca={busca} setBusca={setBusca}/>
      <div className={CardapioStyles.cardapio__filtros}>
        <Filtros
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <Ordenador
          ordenador={ordenador}
          setOrdenador={setOrdenador}
        />
      </div>
      <Items
        busca={busca}
        filtro={filtro}
        ordenador={ordenador}
      />
    </section>
  )
}