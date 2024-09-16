import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <NavLink to="/" className="logo">
          Logo
        </NavLink>
      </div>
    </header>
  );
}
