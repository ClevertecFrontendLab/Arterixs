import { useParams } from 'react-router-dom';
import { Card } from './card';
import { IListBooks } from '../../types/interface';
import { getValidUrlCategory } from '../../utils/helpers';
import { NoContent } from './no-content';

export const Content = (props: { arrayList: IListBooks[]; search: string }) => {
  const params = useParams();
  const pathUrl = getValidUrlCategory(params.category);
  const { arrayList, search } = props;
  return (
    <section className='wrapper-content'>
      <NoContent flag={arrayList.length} search={search} />
      {arrayList.map((item) => (
        <Card urlWay={pathUrl} search={search} {...item} key={item.id} />
      ))}
    </section>
  );
};
