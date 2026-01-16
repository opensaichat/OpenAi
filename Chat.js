const messages = document.getElementById('messages');
const input = document.getElementById('input');
const user = localStorage.getItem('user') || 'Гость';

function send(){
  if(!input.value) return;

  addMessage(user + ': ' + input.value);
  setTimeout(() => {
    addMessage('NeuroAI: Я пока в разработке 🤖');
  }, 600);

  input.value = '';
}

function addMessage(text){
  const div = document.createElement('div');
  div.className = 'msg';
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
