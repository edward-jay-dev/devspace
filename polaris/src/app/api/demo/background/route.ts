// localhost:3000/api/demo/background
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { inngest } from "@/inngest/client";

const googleAI = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
});

export async function POST() {
    await inngest.send({
        name: "demo/generate",
        data: {
            
        }
    });

    return Response.json({ status: "started" });
};