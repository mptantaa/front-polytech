import React, { useState, useEffect }  from 'react';
import { Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import '../App.css';
import axios from 'axios';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: var(--blue);
  border-color: var(--blue);
  color: white;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;

  &:disabled {
    border-color: var(--theme-text);
    background-color: var(--theme-text);
  } 

  &:hover {
    border-color: white;
    background-color: white;
  } 
`;

const LIMIT_LIST_USERS = 10; 

interface User {
  key: number;
  name: string;
  age: number;
}

const Catalog = () => {
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<User[]>([]);
  const skip = (page - 1) * LIMIT_LIST_USERS;

  const getUsers = async (skip: number, limit: number) => {
    const response = await axios.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
    setDataSource(response.data.users);
  }

  const columns: ColumnsType<User> = [
    {
      key: 'name',
      title: 'Имя',
      dataIndex: 'firstName',
      render: (text) => <a>{text}</a>,
    },
    {
      key: 'age',
      title: 'Возраст',
      dataIndex: 'age',
    },
  ];

  useEffect(() => {
    getUsers(skip, LIMIT_LIST_USERS);
  }, [page]);

  return (
    <>
      <Table<User> columns={columns} dataSource={dataSource} pagination={false}/>
      <StyledButton onClick={() => setPage(page - 1)} disabled={!skip}>Назад</StyledButton>
      <StyledButton onClick={() => setPage(page + 1)}>Вперед</StyledButton>
      <p>Текущая страница: {page}</p>
    </>
  );
}

export default Catalog;
