import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Sprite } from '../../components/sprite';

export const Layout = () => {
  const [burgerState, setBurgerState] = useState(false);
  const toggleBurgerMenu = () => setBurgerState(!burgerState);
  return (
    <div className='container'>
      {burgerState ? (
        <div
          className='wrapper-content-burger'
          onClick={toggleBurgerMenu}
          onKeyUp={() => {}}
          role='button'
          tabIndex={0}
        >
          <span style={{ display: 'none' }}>Send</span>
        </div>
      ) : (
        false
      )}
      <div className='wrapper'>
        <Header {...{ burgerState, toggleBurgerMenu }} />
        <Outlet />
        <Footer />
      </div>
      <Sprite />
    </div>
  );
};
