import { Descriptions, Empty } from 'antd';
import React from 'react';

const Post = ({ post, users }) => {
    if (!post) {
        return <Empty />
    }
    
    const user = users.find(user => user.id === post.userId);
    return (
        <Descriptions title='Post'>
            <Descriptions.Item label='User'>{user.name || 'n/a'}</Descriptions.Item>
            <Descriptions.Item label='Title'>{post.title}</Descriptions.Item>
            <Descriptions.Item label='Body'>{post.body}</Descriptions.Item>
        </Descriptions>
    );
};

export default Post;
