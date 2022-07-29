import {ReactComponent as Logo} from 'assets/logo.svg';
import { Link } from 'react-router-dom'
import MenuStyles from './Menu.module.scss'

export default function Menu(){
  const rotas = [{
    label: 'Inicio',
    to: '/'
  },{
    label: 'Cardápio',
    to: '/cardapio'
  },{
    label: 'sobre',
    to: '/sobre'
  }]
  return(
    <nav className={MenuStyles.menu}>
      <Logo/>
      <ul className={MenuStyles.menu__list}>
        {rotas.map((rota, index)=>(
            <li key={index} className={MenuStyles.menu__link}>
              <Link to={rota.to}>
                {rota.label}
              </Link>
            </li>
        ))}
      </ul>
    </nav>
  )
}