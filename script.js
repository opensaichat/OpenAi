const chat = document.getElementById("chat");
const input = document.getElementById("userInput");

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    addMessage("Я — AI. Подключи API, и я стану умным 😉", "bot");
  }, 600);
}

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
