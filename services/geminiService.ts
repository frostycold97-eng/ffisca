import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const defineConcept = async (concept: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure your environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Define the financial concept: "${concept}". 
      
      Guidelines:
      - Be academic, neutral, and concise.
      - Use plain text only (no markdown formatting like bold or italics).
      - Maximum 3 sentences.
      - Do not use exclamation points or hype language.
      - Focus on the fundamental economic mechanism.`,
    });
    
    return response.text || "Definition not available.";
  } catch (error) {
    console.error("Error fetching definition:", error);
    return "Unable to retrieve definition at this time.";
  }
};