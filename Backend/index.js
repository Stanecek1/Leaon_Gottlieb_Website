import express from "express"
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import axios from "axios";
// const axios = require('axios');
dotenv.config();
const API_KEY = process.env.API_KEY
const SECRET_KEY = process.env.SECRET_KEY
const EMAIL = process.env.MAILJET_EMAIL
const TO_EMAIL = process.env.TO_EMAIL


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.post('/sendMail', async (req, res) => {
    console.log('test')
    console.log(API_KEY)
    console.log('Got body:', req.body);
    sendEmail(req.body.from, req.body.message)
    res.send({'sent': true,  'messaage': 'Email Sent'});
})

//TODO change 'TO' to leons gmail the one card one
async function sendEmail(name, message) {
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": EMAIL, "Name": name},
        "To": [{"Email": TO_EMAIL, "Name": 'Leon Gottlieb'}],
        "Subject": 'From Leon Gottlieb Website',
        "TextPart": message
      }]
    });
  
    const config = {
      method: 'post',
      url: 'https://api.mailjet.com/v3.1/send',
      data: data,
      headers: {'Content-Type': 'application/json'},
      auth: {username: API_KEY, password: SECRET_KEY},
    };
  
    return axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  
  }

app.listen(8080, () => console.log("Listening on port 8080"));