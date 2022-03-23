
const { getChat, chatHistory } = require('./chat-history')
const db = require('./utils/db');
const {checkLogin} = require('./utils/node-storage');

const run = async (chatSource, chatInput) => {
  await chatHistory(chatSource, chatInput)
}

const start = async () => {
  await checkLogin();

  let chatSource = await db.getChatSource();
  if (!chatSource) {
    chatSource = await getChat();
    await db.updateChat(chatSource)
  }
  let chatInput = await db.getChatInput();
  if (!chatInput) {
    chatInput = await getChat();
    await db.updateChatInput(chatInput)
  }

  let timerId = setTimeout(function tick() {
    run(chatSource, chatInput);
    timerId = setTimeout(tick, 20000);
  }, 2000);
}

start()