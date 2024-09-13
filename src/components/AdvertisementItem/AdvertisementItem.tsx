import { Link } from 'react-router-dom';
import { Advertisment } from '../../types/types';
import style from './AdvertisementItem.module.scss';
import cardImg from '../../assets/image.png';
import likeIcon from '../../assets/liked.svg';
import viewIcon from '../../assets/viewed.svg';

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
