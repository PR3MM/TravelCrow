// import { generateDescription, generateAttractions, generateHiddenAttractions , generateTravelTips,generateExtraDescription } from '../services/openaiService.js';
import { generateDescription, generateAttractions, generateHiddenAttractions ,generateExtraDescription } from '../services/openaiService.js';
// import { generateDescription } from '../services/openaiService.js';

export async function getAIContent(req, res) {
  const { destination } = req.params;

  try {
    // const [description,ExtraDescription, attractions,HiddenAttractions, travelTips] = await Promise.all([
    const [description] = await Promise.all([
      generateDescription(destination),
      // generateExtraDescription(destination),
      // generateAttractions(destination),
      // generateHiddenAttractions(destination),
      // generateTravelTips(destination)
    ]);

    // const photos = await generatePhotos(destination);

    res.json({
      description,
      // ExtraDescription,
      // attractions,
      // HiddenAttractions,
      // travelTips,
    //   photos
    });
  } catch (error) {
    console.error('Error generating AI content:', error);
    res.status(500).json({ error: 'Failed to generate AI content' });
  }
}