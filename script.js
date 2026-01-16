const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

function addMessage(text, className) {
  const div = document.createElement("div");
  div.className = "msg " + className;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  // Заглушка ИИ (пока без API)
  setTimeout(() => {
    addMessage("Я ИИ. Скоро подключим настоящий интеллект 🤖", "bot");
  }, 600);
}
