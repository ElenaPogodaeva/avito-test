import AdvertisementList from '../../components/AdvertisementList/AdvertisementList';
import { productData } from '../../mocks/mock';
import style from './AdvertisementsPage.module.scss';

export function AdvertisementsPage() {
  return (
    <div className="page">
      <section className="section">
        <h2 className="section-title">Объявления</h2>
        <input type="text" className={style.searchInput} placeholder="Search by title" />
        <select name="choice" className={style.searchInput}>
          <option value="first">First Value</option>
          <option value="second" selected>
            Second Value
          </option>
          <option value="third">Third Value</option>
        </select>
        <AdvertisementList advertisments={productData} />
        <button type="button" className={`button ${style.loadBtn}`}>
          Show more
        </button>
      </section>
    </div>
  );
}

export default AdvertisementsPage;
