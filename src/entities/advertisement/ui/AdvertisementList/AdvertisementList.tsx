import { Advertisment } from '@/shared/api';
import { AdvertisementItem } from '../AdvertisementItem/AdvertisementItem';
import style from './AdvertisementList.module.scss';

type AdvertisementListProps = {
  advertisments: Advertisment[];
};

export function AdvertisementList({ advertisments }: AdvertisementListProps) {
  return (
    <div className={style.advertisments}>
      {Boolean(advertisments.length) &&
        advertisments.map((advertisment) => (
          <AdvertisementItem key={advertisment.id} advertisment={advertisment} />
        ))}
    </div>
  );
}

export default AdvertisementList;
