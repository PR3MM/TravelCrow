import {
  generateDescription,
  generateAttractions,
  generateHiddenAttractions,
  generateTravelTips,
  generateExtraDescription,
} from "../services/openaiService.js";

import { TourDestDescription, tourpkg } from "../services/AITourPrompts.js";

export async function getAIContent(req, res) {
  const { destination } = req.params;

  try {
    const [
      description,
      ExtraDescription,
      attractions,
      HiddenAttractions,
      travelTips,
      tourPackage
    ] = await Promise.all([
      generateDescription(destination),
      generateExtraDescription(destination),
      generateAttractions(destination),
      generateHiddenAttractions(destination),
      generateTravelTips(destination),
      tourpkg(destination), // Corrected reference
    ]);

    // Log the tourPackage content
    // console.log("Tour Package Content:", tourPackage);

    // Send the response
    res.json({
      description,
      ExtraDescription,
      attractions,
      HiddenAttractions,
      travelTips,
      TourDestDescription,  
      tourPackage
    });
    // {      console.log("tour Package content:", tourPackage);}
  } catch (error) {
    console.error("Error generating AI content:", error);
    res.status(500).json({ error: "Failed to generate AI content" });
  }
}
