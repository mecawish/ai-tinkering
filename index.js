import 'dotenv/config';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const results = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content: 'You are an AI assistant that can answer any questions to the best of your ability.',
    },
    {
      role: 'user',
      content: 'Hi!',
    },
  ],
});

console.log(results.choices[0]);
