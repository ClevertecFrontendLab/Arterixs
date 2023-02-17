import { IListBooks } from '../../types/interface';
import { CardList } from './card-list';

export const ContentList = (props: { arrayList: IListBooks[] }) => {
  const { arrayList } = props;
  return (
    <section className='wrapper-content-list'>
      {arrayList.map((item) => (
        <CardList {...item} key={item.id} />
      ))}
    </section>
  );
};
