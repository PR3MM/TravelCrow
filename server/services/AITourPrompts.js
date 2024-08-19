import dotenv from "dotenv";
dotenv.config(); 

import OpenAI from "openai";
import axios from "axios";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey : process.env.OPENAI_API_KEY ,
  Model : process.env.MODEL

  
});

export async function TourDestDescription(destination) {
  const response = await openai.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct:free",
    messages: [
      {
        role: "system",
        content:
          "You are a knowledgeable travel guide in India. Provide a brief, engaging description of the destination.",
      },
      { role: "user", content: `Describe ${destination} in about 100 words in points.` },
    ],
  });
  return response.choices[0].message.content.trim();
}

export async function tourpkg(destination) {
    try {
        const response = await openai.chat.completions.create({
            model: process.env.MODEL || "meta-llama/llama-3.1-8b-instruct:free", // Ensure the model is correctly set
            messages: [
                {
                    role: "system",
                    content:
                        "You are a knowledgeable and experienced travel guide in India. Your task is to create a detailed and engaging tour package that covers all major attractions, activities, and experiences for the given destination. The package should include a day-by-day itinerary, recommended duration of stay, travel tips, and any unique aspects of the destination that travelers should be aware of. The language should be enticing and informative, appealing to a diverse audience.",
                },
                {
                    role: "user",
                    content: `Create a detailed tour package for ${destination}. Include a day-by-day itinerary, key attractions, recommended activities, suggested duration of stay, and any important travel tips or special highlights.`,
                },
            ],
        });

        // console.log("Tour Package Response:", response.choices[0].message.content); // Log the entire response object

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching tour package:", error); // Log any errors
        throw new Error("Failed to generate tour package.");
    }
}






// export async function generateAttractions(destination) {
//   const response = await openai.chat.completions.create({
//     model: "meta-llama/llama-3.1-8b-instruct:free",
//     messages: [
//       {
//         role: "system",
//         content:
//           "You are a helpful travel assistant. List 5 popular attractions, one per line.",
//       },
//       { role: "user", content: `List 5 popular attractions in ${destination}` },
//     ],
//   });
//   return response.choices[0].message.content
//     .split("\n")
//     .filter((line) => line.trim() !== "");
// }
// // export async function generateHiddenAttractions(destination) {
// //   const response = await openai.chat.completions.create({
// //     model: "meta-llama/llama-3.1-8b-instruct:free",
// //     messages: [
// //       {
// //         role: "system",
// //         content:
// //           "You are a helpful travel assistant. List 5 Hidden attractions, one per line.",
// //       },
// //       { role: "user", content: `List 5 Hidden attractions in or near ${destination}` },
// //     ],
// //     max_tokens: 150
// //   });
// //   return response.choices[0].message.content
// //     .split("\n")
// //     .filter((line) => line.trim() !== "");
// // }

// export async function generateTravelTips(destination) {
//   const response = await openai.chat.completions.create({
//     model: "meta-llama/llama-3.1-8b-instruct:free",

//     messages: [
//       {
//         role: "system",
//         content:
//           "You are a seasoned traveler. Provide 3 useful travel tips, one per line.",
//       },
//       {
//         role: "user",
//         content: `Give 3 travel tips for visiting ${destination}`,
//       },
//     ],
//     max_tokens: 150,
//   });
//   return response.choices[0].message.content
//     .split("\n")
//     .filter((line) => line.trim() !== "");
// }

// export async function generatePhotos(destination) {
//   const response = await post('https://api.openai.com/v1/images/generations', {
//     prompt: `Beautiful photograph of ${destination}`,
//     n: 4,
//     size: "1024x1024"
//   }, {
//     headers: {
//       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//       'Content-Type': 'application/json'
//     }
//   });
//   return response.data.data.map(item => item.url);
// }
