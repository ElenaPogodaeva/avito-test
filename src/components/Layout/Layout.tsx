import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import style from './Layout.module.scss';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

export function Layout() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.mainWrapper}>
        <main className={style.main}>
          <Navigation />
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
