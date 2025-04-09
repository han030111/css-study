const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

const dataFile = 'canvas_data.json';

async function readData() {
    try {
        const rawData = await fs.readFile(dataFile, 'utf8');
        return JSON.parse(rawData);
    } catch (error) {
        return [];
    }
}

async function saveData(data) {
    await fs.writeFile(dataFile, JSON.stringify(data), 'utf8');
}

async function resetData() {
    try {
        await fs.writeFile(dataFile, JSON.stringify([]), 'utf8');
        console.log('서버 데이터가 초기화되었습니다.');
    } catch (error) {
        console.error('서버 데이터 초기화 실패:', error);
    }
}
app.get('/', async (req, res) => {
    const data = await readData();
    res.json(data);
});

app.post('/', async (req, res) => {
    const newData = req.body;
    const existingData = await readData();
    const updatedData = [...existingData, newData];
    await saveData(updatedData);
    res.sendStatus(200);
});

app.post('/reset', async (req, res) => {
    await resetData();
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});