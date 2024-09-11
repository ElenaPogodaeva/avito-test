import { NavLink } from 'react-router-dom';
import style from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footerContainer}>
          <NavLink to="/" className="logo">
            Logo
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
