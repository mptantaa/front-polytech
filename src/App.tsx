<<<<<<< Updated upstream
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
=======
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainRouter from './app/routes';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <>
      <Table<User> columns={columns} dataSource={data} />
    </>
=======
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <MainRouter isAuth={isAuth} />
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;