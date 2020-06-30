import React, { useEffect, useState } from 'react';
import { Row, Table, message } from 'antd';
import axios from 'axios';

const Task1 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => setData(response.data))
            .catch(error => {
                message.error('Error while trying to load data');
                console.log(error);
            })
            .finally(() => setLoading(false));
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            filters: data.map(person => ({ text: person.name, value: person.name })),
            onFilter: (value, record) => record.name === value,
        },
        {
            title: 'Username',
            dataIndex: 'username',
            sorter: (a, b) => a.username.localeCompare(b.username),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
        },
    ];

    return (
        <Row justify='center' style={{ marginTop: 50 }}>
            <Table loading={loading} columns={columns} dataSource={data} pagination={false} rowKey='id' />
        </Row>
    );
};

export default Task1;
