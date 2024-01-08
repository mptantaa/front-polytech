import React from 'react';
import { Link } from 'react-router-dom';
import { CATALOG_ROUTE, ABOUT_ROUTE, REVIEWS_ROUTE, CONTACTS_ROUTE } from '../app/routes/config';

interface NavbarProps {
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}
  
const Navbar = ({ isAuth, setIsAuth }: NavbarProps) => {
  return (
    <nav>
      {/* Ссылки в Navbar */}
      <Link to={CATALOG_ROUTE}>Каталог</Link>
      <Link to={ABOUT_ROUTE}>О нас</Link>
      <Link to={REVIEWS_ROUTE}>Отзывы</Link>
      <Link to={CONTACTS_ROUTE}>Контакты</Link>
      {/* Кнопка авторизации */}
      <button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? 'Выйти' : 'Войти'}
      </button>
    </nav>
  );
};

export default Navbar;
