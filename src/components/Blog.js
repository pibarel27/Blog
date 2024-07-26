import React from 'react';
import BlogPost from './BlogPost';

const posts = [
  { id: '1', title: 'Chatbot', content: 'Development of Chatbot using AIML Technologies' },
  { id: '2', title: 'C Complete Notes', content: 'C programming is a powerful, general-purpose language that has influenced many other languages. It is known for its performance and close interaction with hardware' },
  { id: '3', title: 'JavaScript', content: 'JavaScript is the most powerful and versatile web programming language. It is used for making the websites interactive. JavaScript helps us add features like animations, interactive forms and dynamic content to web pages.In this JavaScript Tutorial, we’ll learn all the basics to advanced topics and concepts of JavaScript. This JavaScript tutorial includes operators, control flow, functions, objects, Asynchronous JavaScript, Events, DOM manipulation, OOPs, Closures, Event loops etc.What is JavaScript?JavaScript is a programming language used for creating dynamic content on websites. It is a lightweight, cross-platform and single-threaded programming language. JavaScript is an interpreted language that executes code line by line providing more flexibility. It is a commonly used programming language to create dynamic and interactive elements in web applications. It is easy to learn.' },
];

const Blog = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <BlogPost key={post.id} id={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
