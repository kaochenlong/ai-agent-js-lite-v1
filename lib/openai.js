import OpenAI from "openai";
import { OPENAI_API_KEY } from "../config.js";

export const client = new OpenAI({ apiKey: OPENAI_API_KEY });

// agent 迴圈一題要打好幾次 API，所以 reasoning 從 low 起跳，需要的時候再往上調。
export const DEFAULT_MODEL = "gpt-6-luna";
export const DEFAULT_REASONING = { effort: "low" };
