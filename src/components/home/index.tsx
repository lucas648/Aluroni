import HomeStyles from './Home.module.scss';
import {Outlet} from 'react-router-dom'

export default function Home(){
  return(
    <>
      <header className={HomeStyles.header}>
        <div className={HomeStyles.header__text}>
          A casa das Massas
        </div>
      </header>
      <div>
        <Outlet/>
      </div>
    </>

  )
}