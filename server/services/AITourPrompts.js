import dotenv from "dotenv";
dotenv.config(); 

import OpenAI from "openai";
import axios from "axios";
// const { GoogleGenerativeAI } = require("@google/generative-ai");
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



export async function TourDestDescription(destination) {
  
    const prompt = `Describe ${destination} in about 100 words in points.`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export async function tourpkg(destination) {
    try {
      const prompt = `Create a detailed tour package for ${destination}. Include a day-by-day itinerary, key attractions, recommended activities, suggested duration of stay, and any important travel tips or special highlights. use indian currency format.`

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      // console.log(text);
      return text;

        
            
        }


     catch (error) {
        console.error("Error fetching tour package:", error); 
        throw new Error("Failed to generate tour package.");
    }
}





