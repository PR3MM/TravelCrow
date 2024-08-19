import dotenv from "dotenv";
dotenv.config(); 

import OpenAI from "openai";
import axios from "axios";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey : process.env.OPENAI_API_KEY ,
  Model : process.env.MODEL

  
});

// export async function generateDescription(destination) {
//   const response = await openai.chat.completions.create({
//     // model: "gpt-3.5-turbo",
//     model: "meta-llama/llama-3.1-8b-instruct:free",
//     messages: [
//       { role: "system", content: "You are a knowledgeable travel guide. Provide a brief, engaging description of the destination." },
//       { role: "user", content: `Describe ${destination} in about 100 words.` }
//     ],
//     max_tokens: 150
//   });
//   return response.choices[0].message.content.trim();
// }
export async function generateDescription(destination) {
  const response = await openai.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct:free",
    messages: [
      {
        role: "system",
        content:
          "You are a knowledgeable travel guide. Provide a brief, engaging description of the destination.",
      },
      { role: "user", content: `Describe ${destination} in about 100 words.` },
    ],
  });
  return response.choices[0].message.content.trim();
}
export async function generateExtraDescription(destination) {
  const response = await openai.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct:free",
    messages: [
      {
        role: "system",
        content:
          "You are a Historian travel assistant.. Provide a brief, engaging description of the destination.",
      },
      {
        role: "user",
        content: `Give a brief, engaging description of Historical Background of ${destination} in about 100 words.`,
      },
    ],
  });
  return response.choices[0].message.content
    .split("\n")
    .filter((line) => line.trim() !== "");
}

export async function generateAttractions(destination) {
  const response = await openai.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct:free",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful travel assistant. List 5 popular attractions, one per line.",
      },
      { role: "user", content: `List 5 popular attractions in ${destination}` },
    ],
  });
  return response.choices[0].message.content
    .split("\n")
    .filter((line) => line.trim() !== "");
}
export async function generateHiddenAttractions(destination) {
  const response = await openai.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct:free",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful travel assistant. List 5 Hidden attractions, one per line.",
      },
      { role: "user", content: `List 5 Hidden attractions in or near ${destination}` },
    ],
    max_tokens: 150
  });
  return response.choices[0].message.content
    .split("\n")
    .filter((line) => line.trim() !== "");
}

export async function generateTravelTips(destination) {
  const response = await openai.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct:free",

    messages: [
      {
        role: "system",
        content:
          "You are a seasoned traveler. Provide 3 useful travel tips, one per line.",
      },
      {
        role: "user",
        content: `Give 3 travel tips for visiting ${destination}`,
      },
    ],
    max_tokens: 150,
  });
  return response.choices[0].message.content
    .split("\n")
    .filter((line) => line.trim() !== "");
}

export async function generatePhotos(destination) {
  const response = await post('https://api.openai.com/v1/images/generations', {
    prompt: `Beautiful photograph of ${destination}`,
    n: 4,
    size: "1024x1024"
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data.data.map(item => item.url);
}
  