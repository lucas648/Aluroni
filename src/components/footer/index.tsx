import footerStyles from './Footer.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';

export default function Footer(){
  return(
    <footer className={footerStyles.footer}>
      <Logo/>
    </footer>
  )
}