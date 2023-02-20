import { useParams } from 'react-router-dom';
import { Card } from './card';
import { IListBooks } from '../../types/interface';
import { getValidUrlCategory } from '../../utils/helpers';

export const Content = (props: { arrayList: IListBooks[] }) => {
  const params = useParams()
  const pathUrl = getValidUrlCategory(params.category)
  const { arrayList } = props;
  return (
    <section className='wrapper-content'>
      {arrayList.map((item) => (
        <Card urlWay={pathUrl} {...item} key={item.id} />
      ))}
    </section>
  );
};
