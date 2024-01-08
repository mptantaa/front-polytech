import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CATALOG_ROUTE, ABOUT_ROUTE, REVIEWS_ROUTE, CONTACTS_ROUTE } from '../app/routes/config';
import styled from 'styled-components';

const StyledNav = styled.nav`
  padding: 0.5rem 1rem;
  background-color: var(--grey);
  color: white;

  a {
    color: white;
    margin-right: 1rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background-color: var(--blue);
    border: none;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    color: white;
    margin-left: 1em;

    &:hover {
      background-color: var(--light-blue);
    }
  }
`;

interface NavbarProps {
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}
  
const Navbar = ({ isAuth, setIsAuth }: NavbarProps) => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">('light')
  const changeTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    setCurrentTheme(newTheme);
  }
  return (
    <StyledNav>
      {/* Ссылки в Navbar */}
      <Link to={CATALOG_ROUTE}>Каталог</Link>
      <Link to={ABOUT_ROUTE}>О нас</Link>
      <Link to={REVIEWS_ROUTE}>Отзывы</Link>
      <Link to={CONTACTS_ROUTE}>Контакты</Link>
      {/* Кнопка авторизации */}
      <button onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? 'Выйти' : 'Войти'}
      </button>
      {/* Кнопка смены темы */}
      <button onClick={() => changeTheme()}>Сменить тему</button> 

    </StyledNav>
  );
};

export default Navbar;
