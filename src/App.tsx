import React from 'react';
import logo from './logo.svg';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './App.css';

interface User {
  key: number;
  name: string;
  age: number;
}

const columns: ColumnsType<User> = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    key: 'age',
    title: 'Age',
    dataIndex: 'age',
  },
];

const data: User[] = [
  {
    key: 0,
    name: 'Jack',
    age: 20,
  },
  {
    key: 1,
    name: 'Herry',
    age: 22,
  },
];

function App() {
  return (
    <>
      <Table<User> columns={columns} dataSource={data} />
    </>
  );
}

export default App;
