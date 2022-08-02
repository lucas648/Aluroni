import HomeStyles from './Home.module.scss';
import {Outlet} from 'react-router-dom';
import temaStyles from 'styles/Tema.module.scss';

export default function Home(){
  return(
    <>
      <header className={HomeStyles.header}>
        <div className={HomeStyles.header__text}>
          A casa das Massas
        </div>
      </header>
      <div className={temaStyles.container}>
        <Outlet/>
      </div>
    </>

  )
}