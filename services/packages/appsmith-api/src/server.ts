import express from 'express';
const app = express();
const port = 3000;
import { connect } from './db';
import { Person } from './model/person';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/people', async (req, res) => {
    /*const testData = [
        { name: 'Dave', age: 21},
        { name: 'Dan', age: 21},
        { name: 'Dill', age: 21},
        { name: 'Drew', age: 21},
    ];*/

    const people = await Person.find({});

    res.send(people);
});


app.post('/people', async (req, res) => {
    console.log(req.body)
    const { name, age } = req.body;
    await Person.create({
        name,
        age,
    })
    res.send(req.body);
});

//connect().catch(err => console.log(err));

app.listen(port, async () => {
  await connect();
  console.log(`Example app listening on port ${port}`)
});
