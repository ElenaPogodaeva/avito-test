import { Link } from 'react-router-dom';
import { Advertisment } from '@/shared/api';
import cardImg from '@/shared/assets/image.png';
import likeIcon from '@/shared/assets/liked.svg';
import viewIcon from '@/shared/assets/viewed.svg';
import style from './AdvertisementItem.module.scss';

type AdvertisementItemProps = {
  advertisment: Advertisment;
};

export function AdvertisementItem({ advertisment }: AdvertisementItemProps) {
  const { id, name, price, imageUrl, views, likes } = advertisment;

  return (
    <Link to={`/advertisements/${id}`} className={style.card} aria-label="Advertisment card">
      <img src={imageUrl || cardImg} className={style.advertImg} alt="Advertisment" />
      <div className={style.advertContent}>
        <h2 className={style.advertTitle}>{name}</h2>
        <p className={style.advertPrice}>{price} $</p>
        <div className={style.advertInfo}>
          <div className={style.advertIcon}>
            <img src={likeIcon} alt="Like Icon" />
            {likes}
          </div>
          <div className={style.advertIcon}>
            <img src={viewIcon} alt="View Icon" />
            {views}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AdvertisementItem;
