import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import style from './AdvertisementDetail.module.scss';
import { fetchAdvertisement } from '../../redux/thunks';
import cardImg from '../../assets/image.png';

export function AdvertisementDetail() {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { isLoading, error, advertisement } = useAppSelector((state) => state.advertisement);

  useEffect(() => {
    dispatch(fetchAdvertisement(id as string));
  }, []);

  if (isLoading) return <div>Loading</div>;
  if (error) return <p>Error occured</p>;

  return (
    <div className="page">
      <section className="section">
        <div className={style.content}>
          <div className={style.mainImg}>
            <img src={advertisement?.imageUrl || cardImg} alt="Advertisement" loading="lazy" />
          </div>
          <div className={style.info}>
            <h1 className={`section-title ${style.productTitle}`}>{advertisement?.name}</h1>
            <p className={style.description}>{advertisement?.description}</p>
            <h3 className={style.price}>{advertisement?.price}$</h3>
            <button type="button" className="button">
              Редактировать
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdvertisementDetail;
