// import OpenAI from "openai";

// export const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-3.5-turbo",
// });
import OpenAI from 'openai';
import { ClientOptions } from 'openai';


const customConfig: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY,
  
};
const openai = new OpenAI(customConfig);

export default openai;


