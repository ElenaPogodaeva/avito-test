import { useForm } from 'react-hook-form';
import { FormValues } from '@/shared/api';
import style from './AdvertisementForm.module.scss';

type AdvertisementFormProps = {
  onSubmit: (data: FormValues) => void;
  onCancel: () => void;
  values?: {
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
  };
};

export function AdvertisementForm({ onSubmit, onCancel, values }: AdvertisementFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: values?.name,
      description: values?.description,
      price: values?.price,
      imageUrl: values?.imageUrl,
    },
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
        <button type="button" className="button" onClick={onCancel}>
          Отмена
        </button>
      </div>
    </form>
  );
}

AdvertisementForm.defaultProps = {
  values: {},
};
