// pages/api/content.js

export default function handler(req, res) {
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");

  // Define primary color variable
  const primaryColor = req.query.primaryColor
    ? req.query.primaryColor
    : "#FF5733"; // Change this to your desired color

  // Construct the HTML content with inline styles
  const htmlContent = `
  <html>
    <body>
      <style>
          #container {
              max-width: 800px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          #header {
              background-color: ${primaryColor};
              margin-bottom: 10px;
              padding: 20px;
              color: white;
          }
          #contactGrid {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }
          #contact, #summary, #skills, #experience, #education {
              margin-bottom: 20px;
          }
          #skills ul {
              list-style-type: none;
              padding: 0;
          }
          #skills ul li {
              display: inline-block;
              margin-right: 10px;
              background-color: #f2f2f2;
              padding: 5px 10px;
              border-radius: 20px;
          }
          #name {
            font-size: 24px;

          }
      </style>

      <div id="container">
          <header id="header">
              <h1 id="name">John Doe</h1>
              <section id="contactGrid">
                  <p>Email: <span id="email">john.doe@example.com</span></p>
                  <p>Phone: <span id="phone">6370882409</span></p>
                  <p>LinkedIn: <a href="#">linkedin.com/in/johndoe</a></p>
              </section>
          </header>
          <section id="summary">
              <h2>Summary</h2>
              <p>Detail-oriented software developer with 5+ years of experience in designing, implementing, and maintaining web applications. Proficient in multiple programming languages and frameworks.</p>
          </section>
          <section id="skills">
              <h2>Skills</h2>
              <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                  <!-- Add more skills as needed -->
              </ul>
          </section>
          <section id="experience">
              <h2>Experience</h2>
              <h3>Software Developer - ABC Company</h3>
              <p><em>June 2018 - Present</em></p>
              <p>Responsible for developing and maintaining web applications using React and Node.js. Collaborated with the design and product teams to implement new features and improve user experience.</p>
              <h3>Junior Developer - XYZ Corporation</h3>
              <p><em>January 2016 - May 2018</em></p>
              <p>Assisted senior developers in building and testing software applications. Participated in code reviews and provided feedback for improvements.</p>
          </section>
          <section id="education">
              <h2>Education</h2>
              <p>Bachelor of Science in Computer Science - University of Example (2012 - 2016)</p>
          </section>
      </div>
  </body>
  </html>
  `;

  // Return the HTML content
  res.status(200).send(htmlContent);
}
