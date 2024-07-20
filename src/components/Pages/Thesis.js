import React from 'react';

const ThesisCard = ({ title, abstract, authors, guide, university, link }) => (
  <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-4">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="mb-4">{abstract}</p>
    <div className="flex flex-col space-y-4">
      <div>
        <h3 className="text-xl font-semibold mb-2">Authors</h3>
        <p>{authors}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Guide</h3>
        <p>{guide}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">University</h3>
        <p>{university}</p>
      </div>
    </div>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block mt-4 text-blue-600 hover:underline"
    >
      Learn More
    </a>
  </div>
);

const ThesisList = () => {
  const thesisData = [
    {
      title: "Development of Chatbot Using AI/ML Technologies",
      abstract: "This thesis explores the development of a chatbot using artificial intelligence and machine learning technologies. The chatbot is designed to simulate human conversation and provide users with a responsive, interactive experience. Various AI/ML algorithms and techniques are discussed, and the implementation details of the chatbot are presented.",
      authors: "Maisnam Akash Singh &\nDorenjit Haorokcham",
      guide: "Chiranjiv Chingangbam",
      university: "Manipur Technical University",
      link: "https://www.slideshare.net/slideshow/development-of-chatbot-using-ai-ml-technologies-under-the-guidance-of-mr-chiranjiv-chinganbam-assistant-professor-manipur-technical-university/270010951" 
    },
    {
      title: "Another Thesis Title",
      abstract: "This is an abstract for another thesis. It covers different technologies or methods and presents the research findings and implementation details.",
      authors: "Author One\nAuthor Two",
      guide: "Guide Name",
      university: "Another University",
      link: "https://example.com/thesis2" 
    },
    
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {thesisData.map((thesis, index) => (
        <ThesisCard
          key={index}
          title={thesis.title}
          abstract={thesis.abstract}
          authors={thesis.authors}
          guide={thesis.guide}
          university={thesis.university}
          link={thesis.link}
        />
      ))}
    </div>
  );
};

export default ThesisList;
