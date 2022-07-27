import CardapioStyles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Buscador from './buscador';
import { useState } from 'react';
import Filtros from './filtros';

export default function Cardapio(){
  const [busca, setBusca] = useState('');

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
          <Filtros/>
        </div>
      </section>
    </main>
  )
}