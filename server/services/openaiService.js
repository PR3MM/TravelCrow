import dotenv from "dotenv";
dotenv.config(); 

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Update to the correct environment variable name

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateDescription(destination) {
  try {
    const prompt = `Describe ${destination} in about 100 words.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text.trim();
  } catch (error) {
    console.error("Error generating description:", error);
    throw new Error("Failed to generate description.");
  }
}

export async function generateExtraDescription(destination) {
  try {
    const prompt = `Give a brief, engaging description of the Historical Background of ${destination} in about 100 words.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text.trim().split("\n").filter(line => line.trim() !== "");
  } catch (error) {
    console.error("Error generating extra description:", error);
    throw new Error("Failed to generate extra description.");
  }
}

export async function generateAttractions(destination) {
  try {
    const prompt = `List 5 popular attractions in ${destination}, one per line.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text.trim().split("\n").filter(line => line.trim() !== "");
  } catch (error) {
    console.error("Error generating attractions:", error);
    throw new Error("Failed to generate attractions.");
  }
}

export async function generateHiddenAttractions(destination) {
  try {
    const prompt = `List 5 Hidden attractions in or near ${destination}, one per line.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text.trim().split("\n").filter(line => line.trim() !== "");
  } catch (error) {
    console.error("Error generating hidden attractions:", error);
    throw new Error("Failed to generate hidden attractions.");
  }
}

export async function generateTravelTips(destination) {
  try {
    const prompt = `Give 3 travel tips for visiting ${destination}, one per line.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text.trim().split("\n").filter(line => line.trim() !== "");
  } catch (error) {
    console.error("Error generating travel tips:", error);
    throw new Error("Failed to generate travel tips.");
  }
}

export async function generatePhotos(destination) {
  try {
    const prompt = `Generate a beautiful photograph of ${destination}.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    // Assuming the response text contains URLs or image data
    // Adjust according to the actual response structure
    return text.trim().split("\n").filter(line => line.trim() !== "");
  } catch (error) {
    console.error("Error generating photos:", error);
    throw new Error("Failed to generate photos.");
  }
}
