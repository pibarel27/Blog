import React from 'react';
import BlogPost from './BlogPost';

const posts = [
  { id: '1', title: 'Chatbot', content: 'Development of Chatbot using AIML Technologies' },
  { id: '2', title: 'C Complete Notes', content: 'C programming is a powerful, general-purpose language that has influenced many other languages. It is known for its performance and close interaction with hardware' },
  { id: '3', title: 'JavaScript', content: 'This is the content of the third post.' },
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
