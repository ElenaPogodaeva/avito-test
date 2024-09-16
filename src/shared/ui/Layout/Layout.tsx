import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import style from './Layout.module.scss';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';

export function Layout() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.mainWrapper}>
        <div className="container">
          <main className={style.main}>
            <Navigation />
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
