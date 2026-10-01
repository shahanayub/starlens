import dotenv from "dotenv";
import Groq from "groq-sdk";
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const { data } = await groq.models.list();
console.log(data.map(m => m.id).sort().join("\n"));