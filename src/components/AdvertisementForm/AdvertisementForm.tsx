import { useForm } from 'react-hook-form';
import style from './AdvertisementForm.module.scss';

type AdvertisementFormValues = {
  /* Название. */
  name: string;
  /* Описание. */
  description?: string;
  /* Цена. */
  price: number;
  /* Ссылка на изображение. */
  imageUrl?: string;
};

type AdvertisementFormProps = {
  onSubmit: (data: AdvertisementFormValues) => void;
  onCancel: () => void;
  values?: {
    title: string;
    description: string;
  };
};

function AdvertisementForm({ onSubmit, onCancel, values }: AdvertisementFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdvertisementFormValues>({
    // defaultValues: { title: values?.title, description: values?.description },
  });

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      {errors?.name && <p className={style.formError}>* Заполните название</p>}
      <input
        type="text"
        className={`input ${style.formInput}`}
        {...register('name', { required: true })}
        placeholder="Название"
        autoFocus
      />
      <textarea
        className={`input ${style.formInput}`}
        {...register('description')}
        placeholder="Описание"
        autoComplete="off"
      />
      {errors?.price && <p className={style.formError}>* Заполните цену</p>}
      <input
        type="text"
        className={`input ${style.formInput}`}
        {...register('price', { required: true })}
        placeholder="Цена"
      />
      <input
        type="text"
        className={`input ${style.formInput}`}
        {...register('imageUrl')}
        placeholder="URL изображения"
      />
      <div className={style.btnWrapper}>
        <button type="submit" className="button">
          Добавить
        </button>
        <button type="submit" className="button" onClick={onCancel}>
          Отмена
        </button>
      </div>
    </form>
  );
}

AdvertisementForm.defaultProps = {
  values: {},
};

export default AdvertisementForm;
