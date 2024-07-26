import React from 'react';

const notesData = [
  {
    title: 'C Complete Notes',
    description: 'C programming is a powerful, general-purpose language that has influenced many other languages. It is known for its performance and close interaction with hardware.',
    link: 'https://drive.google.com/file/d/1Bp54hmJIWBIXZt_YbuDQaorz308Ko4Vo/view?usp=sharing', 
  },
  {
    title: 'JavaScript Notes',
    description: 'Notes on the development process and techniques.',
    link: 'https://drive.google.com/file/d/1CaEj5Wjm2JcW7C1knmJzQvtmln82lE5g/view?usp=sharing',
  },
  {
    title: 'Sql',
    description: 'References and additional resources.',
    link: 'https://drive.google.com/file/d/1VYHM1C2NmUqA4zkNGgW-__vTSD_SUojf/view?usp=sharing',
  },
];

const Notes = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notesData.map((note, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
              <p className="mb-4">{note.description}</p>
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
                onClick={(e) => {
                  console.log(`Opening PDF: ${note.link}`);
                }}
              >
                View PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
