import { Card } from './card';
import { IListBooks } from '../../types/interface';

export const Content = (props: { arrayList: IListBooks[] }) => {
  const { arrayList } = props;
  return (
    <section className='wrapper-content'>
      {arrayList.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </section>
  );
};
