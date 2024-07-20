import React from 'react';

const BlogPost = ({ title, content, id  }) => {
  return (
    <article className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{content.substring(0, 100)}...</p>
      <a 
        href={"https://www.slideshare.net/slideshow/development-of-chatbot-using-ai-ml-technologies-under-the-guidance-of-mr-chiranjiv-chinganbam-assistant-professor-manipur-technical-university/270010951"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Read More
      </a>
     
    </article>
  );
};

export default BlogPost;
