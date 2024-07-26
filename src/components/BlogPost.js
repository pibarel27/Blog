import React from 'react';

const BlogPost = ({ title, content, id }) => {
  let url;
  switch (id) {
    case '1':
      url = 'https://www.slideshare.net/slideshow/development-of-chatbot-using-ai-ml-technologies-under-the-guidance-of-mr-chiranjiv-chinganbam-assistant-professor-manipur-technical-university/270010951';
      break;
    case '2':
      url = 'https://drive.google.com/file/d/1Bp54hmJIWBIXZt_YbuDQaorz308Ko4Vo/view?usp=sharing';
      break;
    case '3':
      url = 'https://drive.google.com/file/d/1CaEj5Wjm2JcW7C1knmJzQvtmln82lE5g/view?usp=sharing';
      break;
    default:
      url = '#';
      break;
  }

  return (
    <article className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{content.substring(0, 1000)}...</p>
      <a 
        href={url} 
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
