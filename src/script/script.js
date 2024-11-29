/*import {Groq} from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}
  

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama3-8b-8192",
  });
}

*/

window.addEventListener('load', function () {
  const welcomeScreen = document.getElementById('welcome-screen');
  const mainMenu = document.getElementById('main-menu');
  const primaSezione = document.querySelector('.prima-sezione');
  if (primaSezione) {
      primaSezione.classList.add('show');
  } 

  // Nascondi schermata di benvenuto dopo l'animazione
  setTimeout(() => {
      welcomeScreen.classList.add('hide');
      mainMenu.classList.remove('hidden');
  }, 2250); // Tempo totale dell'animazione + pausa
});
