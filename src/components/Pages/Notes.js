import React from 'react';
const notesData = [
  {
    title: 'Research Notes',
    description: 'Key research findings and summaries.',
    link: 'DSA.pdf',
  },
  {
    title: 'Development Notes',
    description: 'Notes on the development process and techniques.',
    link: 'https://example.com/development-notes',
  },
  {
    title: 'References',
    description: 'References and additional resources.',
    link: 'https://example.com/references',
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
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
