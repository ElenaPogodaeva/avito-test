import { Advertisment } from '@/shared/api';
import { AdvertisementItem } from './AdvertisementItem/AdvertisementItem';

type AdvertisementListProps = {
  advertisments: Advertisment[];
};

export function AdvertisementList({ advertisments }: AdvertisementListProps) {
  return (
    <div className="cards">
      {Boolean(advertisments.length) &&
        advertisments.map((advertisment) => (
          <AdvertisementItem key={advertisment.id} advertisment={advertisment} />
        ))}
    </div>
  );
}

export default AdvertisementList;
