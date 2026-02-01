// localhost:3000/api/demo/blocking
import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const googleAI = createGoogleGenerativeAI({
    //apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
    apiKey: "AIzaSyDRr5U31tCbXkTfLCO6KfxvtYF_pzAYUyE",
});

export async function POST() {
    const response = await generateText({
        model: googleAI('gemini-2.5-flash'),
        prompt: 'Write a vegetarian lasagna recipe for 4 peopel.'
    });

    return Response.json({ response });
};