document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    // Function to add a message to the chat
    function addMessage(content, fromMe = false) {
        const message = document.createElement('div');
        message.className = `message ${fromMe ? 'fromMe' : ''}`;
        message.textContent = content;
        messagesContainer.appendChild(message);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to bottom
    }

    // Function to generate a reply based on the user's message
    function generateReply(userMessage) {
        // Normalize user message to lowercase for comparison
        const normalizedMessage = userMessage.toLowerCase();

        // Specific responses for certain messages
        const specificResponses = {
            "hello": "Hi there! How can I assist you today?",
            "thanks": "You're welcome!",
            "bye": "Goodbye! Have a great day!",
            "how are you": "I'm just a bot, but I'm doing great. How can I help you?",
            "what's your name": "I'm a chatbot created for this demo. What can I do for you?",
            "what is your purpose": "I'm here to assist you with information and answer your questions.",
            "help": "Sure, I can help! What do you need assistance with?",
            "joke": "Why don't scientists trust atoms? Because they make up everything!",
