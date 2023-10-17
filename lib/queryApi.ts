import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    const res = await openai.completions.create({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const text = res.choices[0].text;
    console.log(text);

    // You can return the text or perform other actions as needed
    return text;
  } catch (err) {
    console.log(err);
    // Handle the error or return an error message if needed
    throw err;
  }
  
}
export default query;
