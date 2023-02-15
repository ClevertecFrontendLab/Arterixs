import { IMeta } from '../../types/interface';

export const MetaInfo = (props: IMeta) => (
  <section className='body-meta-info'>
    <section className='meta-info-title-block'>
      <h3 className='ratio-block__ratio'>Подробная информация</h3>
    </section>
    <section className='meta-info-content'>
      <div className='content-one'>
        <ul className='content__list-one'>
          <li className='content__list-item'>Издательство</li>
          <li className='content__list-item'>Год издания</li>
          <li className='content__list-item'>Страниц</li>
          <li className='content__list-item'>Переплёт</li>
          <li className='content__list-item'>Формат</li>
        </ul>
        <ul className='content__list-two'>
          <li className='content__list-item-two'>{props.izd}</li>
          <li className='content__list-item-two'>{props.year}</li>
          <li className='content__list-item-two'>{props.pages}</li>
          <li className='content__list-item-two'>{props.perepel}</li>
          <li className='content__list-item-two'>{props.format}</li>
        </ul>
      </div>
      <div className='content-two'>
        <ul className='content__list-one'>
          <li className='content__list-item content__list-item_genre'>Жанр</li>
          <li className='content__list-item'>Вес</li>
          <li className='content__list-item'>ISBN</li>
          <li className='content__list-item'>Изготовитель</li>
        </ul>
        <ul className='content__list-two content__list-two_size'>
          <li className='content__list-item-two'>{props.genres}</li>
          <li className='content__list-item-two'>{props.weight}</li>
          <li className='content__list-item-two'>{props.ISBN}</li>
          <li className='content__list-item-two'>{props.creater}</li>
        </ul>
      </div>
    </section>
  </section>
);
