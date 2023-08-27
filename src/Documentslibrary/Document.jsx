import React from 'react';
import { Document, Packer, Paragraph, TextRun, AlignmentType } from 'docx';

function App() {
  const generateAndDownloadDocument = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: '👤 Christopher Morgan',
                  size: 32,
                  bold: true,
                  color: '2E74B5', // Dark Blue
                }),
              ],
              alignment: AlignmentType.LEFT,
              marginLeft: 100,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: '📞 (123) 456-7890  |  📧 jane.doe@email.com  |  🌐 linkedin.com/in/janedoe',
                  size: 18,
                  color: '444444', // Dark Gray
                }),
              ],
              alignment: AlignmentType.LEFT,
              marginLeft: 100,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: '📞 Phone:',
                  size: 20,
                  color: '2E74B5', // Dark Blue
                }),
                new TextRun({
                  text: '+49 800 600 600',
                  size: 18,
                  color: '000000', // Black
                }),
                new TextRun({
                  text: '\n📧 E-Mail:',
                  size: 20,
                  color: '2E74B5', // Dark Blue
                }),
                new TextRun({
                  text: 'christoper.morgan@gmail.com',
                  size: 18,
                  color: '000000', // Black
                }),
                new TextRun({
                  text: '\n🌐 Linkedin:',
                  size: 20,
                  color: '2E74B5', // Dark Blue
                }),
                new TextRun({
                  text: 'linkedin.com/christopher.morgan',
                  size: 18,
                  color: '000000', // Black
                }),
              ],
              alignment: AlignmentType.LEFT,
              marginLeft: 100,
              marginTop: 10,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: '🔧 Skill Highlights',
                  size: 20,
                  color: '2E74B5', // Dark Blue
                }),
                new TextRun({
                  text: '\n• Project management\n• Strong decision maker\n• Complex problem solver\n• Creative design\n• Innovative\n• Service-focused',
                  size: 18,
                  color: '000000', // Black
                }),
              ],
              alignment: AlignmentType.LEFT,
              marginLeft: 100,
              marginTop: 20,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: '💬 Languages',
                  size: 20,
                  color: '2E74B5', // Dark Blue
                }),
                new TextRun({
                  text: '\nSpanish – C2\nChinese – A1',
                  size: 18,
                  color: '000000', // Black
                }),
              ],
              alignment: AlignmentType.LEFT,
              marginLeft: 100,
              marginTop: 20,
            }),
// ... Rest of the content goes here
new Paragraph({
  children: [
    new TextRun({
      text: '🎯 Objective:',
      size: 20,
      color: '2E74B5', // Dark Blue
    }),
    new TextRun({
      text: '\nResults-driven software engineer with 5+ years of experience in full-stack web development. Seeking a challenging position to contribute technical expertise and creative problem-solving skills to develop innovative software solutions.',
      size: 18,
      color: '000000', // Black
    }),
  ],
  alignment: AlignmentType.LEFT,
  marginLeft: 100,
  marginTop: 20,
}),
new Paragraph({
  children: [
    new TextRun({
      text: '🎓 Education:',
      size: 20,
      color: '2E74B5', // Dark Blue
    }),
    new TextRun({
      text: '\nBachelor of Science in Computer Science',
      size: 18,
      color: '000000', // Black
    }),
    new TextRun({
      text: 'University of Technology, Cityville',
      size: 18,
      color: '000000', // Black
    }),
    new TextRun({
      text: 'Graduated: May 20XX',
      size: 18,
      color: '000000', // Black
    }),
  ],
  alignment: AlignmentType.LEFT,
  marginLeft: 100,
  marginTop: 20,
}),
new Paragraph({
  children: [
    new TextRun({
      text: '🔧 Skills:',
      size: 20,
      color: '2E74B5', // Dark Blue
    }),
    new TextRun({
      text: '\n- Programming Languages: JavaScript, Python, Java\n- Web Development: HTML5, CSS3, React, Node.js\n- Database Management: MySQL, MongoDB\n- Version Control: Git\n- Agile Development: Scrum\n- Problem Solving and Algorithmic Thinking\n- Strong Communication Skills',
      size: 18,
      color: '000000', // Black
    }),
  ],
  alignment: AlignmentType.LEFT,
  marginLeft: 100,
  marginTop: 20,
}),
new Paragraph({
  children: [
    new TextRun({
      text: '💼 Experience:',
      size: 20,
      color: '2E74B5', // Dark Blue
    }),
    new TextRun({
      text: '\n**Software Engineer** | TechSolutions Inc., Cityville | June 20XX - Present',
      size: 18,
      color: '000000', // Black
      bold: true,
    }),
    new TextRun({
      text: '- Collaborated with a cross-functional team to develop and maintain web applications using React and Node.js.',
      size: 18,
      color: '000000', // Black
    }),
    // ... Add the rest of your experience here
  ],
  alignment: AlignmentType.LEFT,
  marginLeft: 100,
  marginTop: 20,
}),
// ... Continue adding the rest of your content here

          ],
        },
      ],
    });

    Packer.toBlob(doc).then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ChristopherMorganCV.docx';
      a.click();
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 style={{ color: '#2E74B5' }}>Generate and Download CV</h1>
      <button
        style={{
          backgroundColor: '#2E74B5',
          color: '#ffffff',
          border: 'none',
          padding: '10px 20px',
          fontSize: '18px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={generateAndDownloadDocument}
      >
        Download CV
      </button>
    </div>
  );
}

export default App;
