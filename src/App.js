import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import { FileDoneOutlined } from '@ant-design/icons';
import Task5 from './pages/Task5';
const { Header, Content, Footer } = Layout;

const App = () => {
    const [currentPage, setCurrentPage] = useState('1');

    const pageMap = {
        '1': Task1,
        '2': Task2,
        '5': Task5,
    };

    const handleMenuClick = ({ key }) => setCurrentPage(key);

    const Task = pageMap[currentPage];

    return (
        <Layout className='layout'>
            <Header>
                <div className='logo' />
                <Menu theme='dark' mode='horizontal' onClick={handleMenuClick} selectedKeys={[currentPage]}>
                    <Menu.Item icon={<FileDoneOutlined />} key='1'>
                        Zadanie 1
                    </Menu.Item>
                    <Menu.Item icon={<FileDoneOutlined />} key='2'>
                        Zadanie 2
                    </Menu.Item>
                    <Menu.Item icon={<FileDoneOutlined />} key='5'>
                        Zadanie 5
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className='site-layout-content'>
                    <Task />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Created by Damian Ciftci</Footer>
        </Layout>
    );
};

export default App;
