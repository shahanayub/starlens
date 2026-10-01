import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.use(cors());
app.use(express.json());

app.post("/api/analyze-sky", upload.single("skyImage"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided." });
    }

    const chatCompletion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content: `You are the StarLens Celestial Observatory Engine running on Groq.
CRITICAL INSTRUCTION: Respond strictly in human-readable Markdown text. DO NOT invoke tools, function calls, JSON payloads, or shell commands under any circumstances.`
        },
        {
          role: "user",
          content: `A night sky observation image named "${req.file.originalname}" (${req.file.size} bytes) was uploaded for processing.

Generate a structured astronomical observation report formatted in clean Markdown including:
1. Identified Constellations & Major Stars visible in the sky.
2. Estimated Viewing Conditions & Sky Transparency rating.
3. Key Celestial Objects to target tonight (e.g., planets, nebulae, clusters).`
        }
      ],
      // Explicitly disable tool processing
      tools: [],
      tool_choice: "none"
    });

    return res.json({
      success: true,
      analysis: chatCompletion.choices[0].message.content
    });

  } catch (error) {
    console.error("Groq Processing Error:", error);
    return res.status(500).json({ error: error.message || "Failed to process sky telemetry." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`StarLens Groq Server listening on http://localhost:${PORT}`);
});