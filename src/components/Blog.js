import React from 'react';
import BlogPost from './BlogPost';

const posts = [
  { id: '1', title: 'Chatbot', content: 'Development of Chatbot using AIML Technologies' },
  { id: '2', title: 'Second Post', content: 'This is the content of the second post.' },
  { id: '3', title: 'Third Post', content: 'This is the content of the third post.' },
];

const Blog = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <BlogPost key={index} id={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
