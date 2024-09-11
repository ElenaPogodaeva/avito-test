import { Link } from 'react-router-dom';
import { Advertisment } from '../../types/types';
import style from './AdvertisementItem.module.scss';
import cardImg from '../../assets/image.png';

type AdvertisementItemProps = {
  advertisment: Advertisment;
};

export function AdvertisementItem({ advertisment }: AdvertisementItemProps) {
  const { id, name, description, price, imageUrl, views, likes } = advertisment;

  return (
    <Link to={`/advertisments/${id}`} className={style.card} aria-label="Advertisment card">
      <img src={imageUrl || cardImg} className={style.advertImg} alt="Advertisment" />
      <div className={style.advertContent}>
        <h2 className={style.advertTitle}>{name}</h2>
        <p className={style.advertPrice}>{price} $</p>
        <div className={style.advertViews}>
          &#9829;
          {views}
        </div>
        <div className={style.advertViews}>
          &#9829;
          {likes}
        </div>
      </div>
    </Link>
  );
}

export default AdvertisementItem;
