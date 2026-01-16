* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: #f8fafc;
  color: #0f172a;
  height: 100vh;
  overflow: hidden;
}

/* ФОН */
.bg {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, #6366f122, transparent 40%),
    radial-gradient(circle at 80% 80%, #22c55e22, transparent 40%);
  z-index: -1;
}

/* КОНТЕЙНЕР */
.container {
  max-width: 480px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

/* HEADER */
header {
  text-align: center;
  margin-bottom: 12px;
}

header h1 {
  font-size: 30px;
  margin: 0;
  font-weight: 700;
}

header h1 span {
  color: #4f46e5;
}

header p {
  font-size: 14px;
  color: #475569;
}

/* ЧАТ */
#chat {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

/* СООБЩЕНИЯ */
.msg {
  max-width: 85%;
  margin-bottom: 12px;
  padding: 12px 14px;
  border-radius: 14px;
  font-size: 14px;
  line-height: 1.4;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.user {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  align-self: flex-end;
}

.bot {
  background: white;
  border: 1px solid #e5e7eb;
  color: #0f172a;
  align-self: flex-start;
}

/* ВВОД */
.input-box {
  display: flex;
  gap: 8px;
  padding-top: 10px;
}

input {
  flex: 1;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  outline: none;
}

input:focus {
  border-color: #6366f1;
}

button {
  width: 48px;
  border-radius: 12px;
  border: none;
  background: #4f46e5;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  background: #4338ca;
}
