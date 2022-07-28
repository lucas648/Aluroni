import CardapioStyles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
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
    <main>
      <nav className={CardapioStyles.menu}>
        <Logo/>
      </nav>
      <header className={CardapioStyles.header}>
        <div className={CardapioStyles.header__text}>
          A casa das Massas
        </div>
      </header>
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
        <Items/>
      </section>
    </main>
  )
}