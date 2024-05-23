// pages/api/content.js

export default function handler(req, res) {
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");

  // Construct the HTML content
  const htmlContent = `
    <body>
      <div id="title">Surya</div>
    </body>
  `;

  // Return the HTML content
  res.status(200).send(htmlContent);
}
