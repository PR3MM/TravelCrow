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
      const prompt = `
  Create a detailed tour package for ${destination}. 
  The package should include the following:
  
  1. Day-by-Day Itinerary: 
     - Provide a detailed schedule for each day, including activities and timings.
  
  2. Key Attractions: 
     - Highlight the must-visit places in the area.

  3. Recommended Activities: 
     - Suggest activities such as sightseeing, cultural experiences, adventure sports, etc.

  4. Suggested Duration of Stay: 
     - Advise on the ideal length of stay for the tour package.

  5. Important Travel Tips: 
     - Include practical advice like the best time to visit, local customs, packing tips, etc.

  6. Special Highlights: 
     - Mention any unique aspects or experiences that travelers shouldn't miss.

  7. Pricing:
     - Use Indian currency format for all costs.

Ensure all sections are well-organized with appropriate headers and bullet points where necessary.
Do not use any stars as a bullet point. Use plain text ,no stars and symbols
`;


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





