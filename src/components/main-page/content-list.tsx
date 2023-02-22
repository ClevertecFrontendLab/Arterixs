import { useParams } from 'react-router-dom';
import { IListBooks } from '../../types/interface';
import { getValidUrlCategory } from '../../utils/helpers';
import { CardList } from './card-list';
import { NoContent } from './no-content';

export const ContentList = (props: { arrayList: IListBooks[] }) => {
  const { arrayList } = props;
  const params = useParams()
  const pathUrl = getValidUrlCategory(params.category)
  return (
    <section className='wrapper-content-list'>
      <NoContent flag={arrayList.length}/>
      {arrayList.map((item) => (
        <CardList urlWay={pathUrl} {...item} key={item.id} />
      ))}
    </section>
  );
};
