const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (like images, css)
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form at the root URL

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    // console.log('Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    //res.send('Thank you for your feedback! Name:', name, 'Email:', email, 'Message:', message);
    res.send(`Thank you for your feedback! Name is: ${name} Email is: ${email} and Message is: ${message}`);
    return 

});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
