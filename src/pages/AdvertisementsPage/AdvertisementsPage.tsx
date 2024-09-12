import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import AdvertisementList from '../../components/AdvertisementList/AdvertisementList';
import style from './AdvertisementsPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addAdvertisement, fetchAdvertisements } from '../../redux/thunks';
import SearchBar from '../../components/SearchBar/SearchBar';
import { setCurrentPage } from '../../redux/advertisementsSlice';
import Modal from '../../components/Modal/Modal';
import AdvertisementForm from '../../components/AdvertisementForm/AdvertisementForm';
import addIcon from '../../assets/plus.svg';
import { Loader } from '../../components/Loader/Loader';

type FormValues = {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
};

export function AdvertisementsPage() {
  const { advertisements, searchValue, currentPage, resultsPerPage, hasMore, isLoading, error } =
    useAppSelector((state) => state.advertisements);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAdvertisements({ searchValue, resultsPerPage, currentPage }));
  }, [searchValue, resultsPerPage, currentPage]);

  const handleLoadMore = () => {
    dispatch(setCurrentPage());
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const AdvertisementsData = {
      name: data.name,
      description: data.description,
      price: data.price,
      imageUrl: data.imageUrl,
      createdAt: new Date().toISOString(),
      views: 0,
      likes: 0,
    };

    await dispatch(addAdvertisement(AdvertisementsData));
    setIsModalOpen(false);
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error occured</p>;

  return (
    <div className="page">
      <section className="section">
        <div className={style.header}>
          <h2 className="section-title">Объявления</h2>
          <button
            type="button"
            className="button add-button"
            onClick={() => setIsModalOpen(true)}
            aria-label="Добавить объявление"
          >
            <img src={addIcon} alt="Add" />
          </button>
        </div>
        <SearchBar />
        <AdvertisementList advertisments={advertisements} />
        {hasMore && (
          <button type="button" className={`button ${style.loadBtn}`} onClick={handleLoadMore}>
            {isLoading ? 'Загрузка...' : 'Загрузить ещё'}
          </button>
        )}
        {isModalOpen && (
          <Modal>
            <AdvertisementForm onSubmit={onSubmit} onCancel={() => setIsModalOpen(false)} />
          </Modal>
        )}
      </section>
    </div>
  );
}

export default AdvertisementsPage;
