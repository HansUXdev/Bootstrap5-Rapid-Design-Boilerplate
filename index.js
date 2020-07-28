const path = require('path');
const express = require('express')
const app = express()
const port = 3000

/**
 * Because Template Strings are more powerful than handlebars and anything else anyway.
 * @param header - for header scripts and tags
 * @param body - all your html in the body
 * @param footer - your footer script
 * 
 */
const html = (header,body,footer) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 Rapid Design Boilerplate</title>
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap-grid.css">
    ${header}
  </head>
  <body>
  ${body}
  <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
  ${footer}
  </body>
  </html>`;
}

app.use('/node_modules/bootstrap/dist/', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')))

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send(  
    html(
      `Bootstrap 5`,
      `<h1>Welcome</h1>`,
      ``) 
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))