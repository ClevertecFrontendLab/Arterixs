export const Footer = () => (
  <footer className='footer'>
    <div className='footer__wrap'>
      <div className='block-author'>
        <p className='author'>© 2020-2023 Cleverland. Все права защищены.</p>
      </div>
      <div className='block-contacts'>
        <svg className='block-contacts__icon'>
          <use href='#facebook' />
        </svg>
        <svg className='block-contacts__icon'>
          <use href='#insta' />
        </svg>
        <svg className='block-contacts__icon'>
          <use href='#vk' />
        </svg>
        <svg className='block-contacts__icon'>
          <use href='#link' />
        </svg>
      </div>
    </div>
  </footer>
);
