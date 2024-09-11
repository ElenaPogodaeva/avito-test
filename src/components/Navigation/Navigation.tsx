import { NavLink } from 'react-router-dom';
import style from './Navigation.module.scss';

export function Navigation() {
  return (
    <nav className="nav">
      <ul className={style.menuList}>
        <li>
          <NavLink to="/" className={style.menuLink}>
            Объявления
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={style.menuLink}>
            Заказы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
