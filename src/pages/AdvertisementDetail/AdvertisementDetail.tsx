import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import style from './AdvertisementDetail.module.scss';
import { editAdvertisement, fetchAdvertisement } from '../../redux/thunks';
import cardImg from '../../assets/image.png';
import Modal from '../../components/Modal/Modal';
import AdvertisementForm from '../../components/AdvertisementForm/AdvertisementForm';
import { Loader } from '../../components/Loader/Loader';

type FormValues = {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
};

export function AdvertisementDetail() {
  const id = useParams().id as string;

  const dispatch = useAppDispatch();

  const { isLoading, error, advertisement } = useAppSelector((state) => state.advertisement);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAdvertisement(id as string));
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const AdvertisementsData = {
      name: data.name,
      description: data.description,
      price: data.price,
      imageUrl: data.imageUrl,
    };

    await dispatch(editAdvertisement({ id, advertisement: AdvertisementsData }));
    await dispatch(fetchAdvertisement(id as string));
    setIsModalOpen(false);
  };

  if (isLoading) return <Loader />;
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
            <button type="button" className="button" onClick={() => setIsModalOpen(true)}>
              Редактировать
            </button>
          </div>
        </div>
        {isModalOpen && (
          <Modal>
            <AdvertisementForm
              onSubmit={onSubmit}
              onCancel={() => setIsModalOpen(false)}
              values={{
                name: advertisement!.name,
                description: advertisement?.description,
                price: advertisement!.price,
                imageUrl: advertisement?.imageUrl,
              }}
            />
          </Modal>
        )}
      </section>
    </div>
  );
}

export default AdvertisementDetail;
