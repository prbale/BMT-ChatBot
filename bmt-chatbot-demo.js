const express = require('express');
const cors = require('cors');

const app = express();

// CORS configuration as before
const whitelist = ['http://localhost:3000', 'http://example.com'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

// Route that sends HTML directly
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Chatbot Sample Demo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #eef2f3;
    }
    header {
      background-color: #007BFF;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background: #fff;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      border-radius: 5px;
      overflow: hidden;
    }
    .description {
      padding: 20px;
      border-bottom: 1px solid #ddd;
    }
    .description p {
      margin: 0;
      color: #555;
    }
    .chat-window {
      padding: 20px;
      height: 300px;
      overflow-y: auto;
      background-color: #f9f9f9;
    }
    .chat-message {
      margin: 10px 0;
      padding: 10px;
      border-radius: 4px;
      max-width: 80%;
      clear: both;
    }
    .chat-message.bot {
      background-color: #e1f5fe;
      float: left;
    }
    .chat-message.user {
      background-color: #c8e6c9;
      float: right;
      text-align: right;
    }
    .input-area {
      display: flex;
      border-top: 1px solid #ddd;
    }
    .input-area input[type="text"] {
      flex: 1;
      padding: 15px;
      border: none;
      outline: none;
      font-size: 16px;
    }
    .input-area button {
      background-color: #007BFF;
      border: none;
      color: white;
      padding: 0 20px;
      cursor: pointer;
      font-size: 16px;
    }
    .input-area button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <header>
    <h1>Chatbot Sample Demo</h1>
  </header>
  <div class="container">
    <div class="description">
      <p>
        Welcome to the Chatbot demo! This page simulates a simple chatbot interface.
      </p>
    </div>
  </div>


<link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
<script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
<df-messenger
  project-id="lithe-optics-261916"
  agent-id="fa9e2c2f-b956-4ba6-84b0-269c786da952"
  language-code="en"
  max-query-length="-1">
  <df-messenger-chat-bubble
   chat-title="My-BMT-Agent-007">
  </df-messenger-chat-bubble>
</df-messenger>
<style>
  df-messenger {
    z-index: 999;
    position: fixed;
    --df-messenger-font-color: #000;
    --df-messenger-font-family: Google Sans;
    --df-messenger-chat-background: #f3f6fc;
    --df-messenger-message-user-background: #d3e3fd;
    --df-messenger-message-bot-background: #fff;
    bottom: 16px;
    right: 16px;
  }
</style>

</body>
</html>
  `);
});

// A sample API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Custom error-handling middleware for CORS errors
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: err.message });
  }
  next(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
