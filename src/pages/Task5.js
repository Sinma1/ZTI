import React, { useState, useEffect } from 'react';
import { Button, Descriptions, message, Row, Space } from 'antd';
import axios from 'axios';
import Post from '../components/Post';

const Task5 = () => {
    const [post, setPost] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(error => {
                message.error('Error while trying to load users');
                console.log(error);
            });
    }, []);

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const onFetch = () => {
        const randomPostId = getRandomNumber(1, 100);
        setLoading(true);
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`)
            .then(response => setPost(response.data))
            .catch(error => {
                message.error('Error while trying to load users');
                console.log(error);
            })
            .finally(() => setLoading(false));
    };

    return (
        <Row justify='center' style={{ marginTop: 50 }}>
            <Space direction='vertical'>
                <Button type='primary' loading={loading} onClick={onFetch}>
                    Fetch random post
                </Button>

                <Post post={post} users={users} />
            </Space>
        </Row>
    );
};

export default Task5;
