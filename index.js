const express = require('express');
const { listSamples, addSample } = require('./lib/samples');

const app = express();
app.use(express.json());

app.get('/samples', (req, res) => res.json(listSamples()));
app.post('/samples', (req, res) => res.status(201).json(addSample(req.body)));

app.listen(3000, () => console.log('sample-tracker-api on :3000'));
