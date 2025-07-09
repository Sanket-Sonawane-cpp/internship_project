/*const exercises = require("../models/exercises");
const username = localStorage.getItem('username');
if(username !== null) {
    document.getElementById('hp_username').textContent = username
    let endIndex = username.indexOf(" ");
    const name = username.slice(0, endIndex);
    document.getElementById("welcomeMsg").textContent = `Welcome ${name}!`
}

const difficulty = localStorage.getItem('difficulty');
const focusArea = localStorage.getItem('focusArea');
const bodyPart = localStorage.getItem('bodyPart');
let data;
async function loadExercises() {

    const response = await fetch('/api/exercises');
    data = await response.json();
    console.log("Simple exercises:", data[0,10]);
    data = data.filter(item => item["Exercise Type"] === difficulty);
    data = data.filter(item => item["Focus Area"] === focusArea);
    data = data.filter(item => item["Target Body Part"] === bodyPart);
}
//loadExercises(); // call the async function

function createTable() {
    const table = document.getElementById("exercise_table");
    a = document.createElement("tr");
    a.td = `${data}`
    console.log(a);
} */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/userInputs', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const exer = require(`../models/exercises`);

async function getExercise() {
    const data = await exer.find({["Target Body Part"]:"Head", ["Focus Area"]: ""});
    console.log(data);
}

getExercise();
