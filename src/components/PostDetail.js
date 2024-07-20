import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  { id: '1', title: 'First Post', content: 'This is the full content of the first post.' },
  { id: '2', title: 'Second Post', content: 'This is the full content of the second post.' },
  { id: '3', title: 'Third Post', content: 'This is the full content of the third post.' },
];

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
