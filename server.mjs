import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const apiKey = 'sk-proj-hT7qdT3kL9cc17mhB6TFT3BlbkFJExXpsbewU3K64I5OMRWe';

app.post('/api/openaiooo', async (req, res) => {
    const { prompt, max_tokens } = req.body;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },

            body: JSON.stringify({
                model: 'gpt-4o', // or another model like 'gpt-3.5-turbo'
                messages: [{ role: 'assistant', content: prompt }],
                max_tokens: max_tokens || 300
            })
        });

        const data = await response.json();
        console.log(data);
        res.json(data);
    } catch (error) {

        console.error(error);

        res.status(500).send('Error communicating with OpenAI API');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
