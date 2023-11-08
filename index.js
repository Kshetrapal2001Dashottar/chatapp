const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatToggle = document.querySelector(".chatbot-toggler")
const body = document.querySelector(".show-chatbot")

let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === 'outgoing' ? `<span class="material-symbols-outlined">
</span><p>${message}</p>` : `<p>${message}</p>`
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = () => {

    userMessage = chatInput.value.trim();
    if (!userMessage) {
        return;
    }

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    chatbox.scrollTo(0, chatbox.scrollHeight);

    let s = '';
    const characters = ["Yo Whats up", "Hello", "Good Morning", "How are you", "How may I help you", "hi", "hey", "hello",
        "sure", "yes", "no", "how are you", "how is life", "how are things", "how are you doing", "who are you",
        "are you human", "are you bot", "are you human or bot"];
    const charactersLength = characters.length;

    s += characters[Math.floor(Math.random() * charactersLength)];

    setTimeout(() => {
        chatbox.appendChild(createChatLi(s, "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 1000)

    chatInput.value = "";

}

sendChatBtn.addEventListener('click', handleChat);

chatToggle.addEventListener('click', () => {
    body.classList.toggle("show-chatbot");
})

