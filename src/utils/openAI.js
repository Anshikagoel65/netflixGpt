import { GEMINI_AI_KEY } from "./constants";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);

export default genAI;