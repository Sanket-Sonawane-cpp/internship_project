const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 4000;

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/userInputs', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public',)));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login_page_v1.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'try.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Body_parts.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Exercise_description.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'focus_area.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about_page.html'));
});

// Mongoose model
const login_info = require('./models/UserInput');
const exer = require(`./models/exercises`);
//const { log } = require('console');
// Routes
app.post('/submit', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new login_info({ name, email });
    await user.save();
    console.log();
    res.status(200).send('Data saved to MongoDB!');
  } catch (err) {
    res.status(500).json('Error saving data');
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// Route to fetch user inputs
app.get('/api/users', async (req, res) => {
  try {
    const { name, email } = req.query;
    const users = await login_info.find({["name"]:`${name}`, ["email"]:`${email}`});
    //console.log(users);
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Error fetching users' });
  }
});


app.get('/api/exercises/:diff/:focus/:part', async (req, res) => {
  console.log("hello there")
  try {
    const { diff, focus, part } = req.params;
    console.log(`${diff}, ${focus}, ${part}`);
    const users = await exer.find({["Target Body Part"]:`${part}`, ["Focus Area"]: `${focus}`, ["Exercise Type"]:`${diff}`});
    console.log(users);
    res.json(users);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Error fetching data' });
  }
});
