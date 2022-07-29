import HeaderStyles from './Header.module.scss'

export default function Header(){
  return(
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.header__text}>
        A casa das Massas
      </div>
    </header>
  )
}